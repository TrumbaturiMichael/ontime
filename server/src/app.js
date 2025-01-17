// get environment vars
import 'dotenv/config';

// import config
import { config } from './config/config.js';

// import dependencies
import { dirname, join, resolve } from 'path';
// init database
import loadDb from './modules/loadDb.js';
// dependencies
import express from 'express';
import http from 'http';
import https from 'https';
import cors from 'cors';
import fs from 'fs';

// Import Routes
import { router as eventsRouter } from './routes/eventsRouter.js';
import { router as eventRouter } from './routes/eventRouter.js';
import { router as ontimeRouter } from './routes/ontimeRouter.js';
import { router as playbackRouter } from './routes/playbackRouter.js';

// Global Objects
import { EventTimer } from './classes/timer/EventTimer.js';
// Start OSC server
import { initiateOSC, shutdownOSCServer } from './controllers/OscController.js';
import { fileURLToPath } from 'url';

// get environment
const env = process.env.NODE_ENV || 'production';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const { db, data } = await loadDb(__dirname);

console.log(`Starting ontime version ${process.env.npm_package_version}`);

// Create express APP
const app = express();
app.disable('x-powered-by');

// setup cors for all routes
app.use(cors());

// enable pre-flight cors
app.options('*', cors());

// Implement middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));

// Implement route endpoints
app.use('/events', eventsRouter);
app.use('/event', eventRouter);
app.use('/ontime', ontimeRouter);
app.use('/playback', playbackRouter);

// serve static - css
app.use('/external', express.static(join(__dirname, 'external')));
// serve static - react
app.use(express.static(join(__dirname, env === 'production' ? '../' : '../../', 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(
    resolve(__dirname, env === 'production' ? '../' : '../../', 'client', 'build', 'index.html'),
  );
});

// Implement route for errors
app.use((err, req, res, next) => {
  res.status(500).send(err.stack);
});

/***************  START SERVICES ***************/
/* Override config
 * ----------------
 *
 * Configuration of services comes from app general config
 * It can be overridden here by the settings in the db
 * It can also be overridden on call
 *
 */

const osc = data.osc;
const oscIP = osc?.targetIP || config.osc.targetIP;
const oscOutPort = osc?.portOut || config.osc.portOut;
const oscInPort = osc?.port || config.osc.port;
const oscInEnabled = osc?.enabled !== undefined ? osc.enabled : config.osc.inputEnabled;

const serverPort = data.settings.serverPort || config.server.port;

/**
 * @description starts OSC server
 * @param overrideConfig
 * @return {Promise<void>}
 */
export const startOSCServer = async (overrideConfig = null) => {
  if (!oscInEnabled) {
    global.timer.info('RX', 'OSC Input Disabled');
    return;
  }

  // Setup default port
  const oscSettings = {
    port: overrideConfig?.port || oscInPort,
  };

  // Start OSC Server
  global.timer.info('RX', `Starting OSC Server on port: ${oscInPort}`);
  initiateOSC(oscSettings);
};

var privateKey;
var certificate;
var credentials;

try
{

  privateKey  = fs.readFileSync('resources/extraResources/src/sslcert/server.key', 'utf8');
  certificate = fs.readFileSync('resources/extraResources/src/sslcert/server.crt', 'utf8');
  credentials = {key: privateKey, cert: certificate};
}
catch(e)
{
  credentials = null;
}

var server;
// create HTTP server
if(credentials != null)
{
  console.log("STARTING HTTPS")
  server = https.createServer(credentials, app);
}
else
{
  server = http.createServer(app);
}

/**
 * @description Starts all necessary services
 * @param overrideConfig
 * @return {Promise<string>}
 */
export const startServer = async (overrideConfig = null) => {
  const port = 4001; // port hardcoded

  // Start server
  const returnMessage = `Ontime is listening on port ${port}`;
  server.listen(port, '0.0.0.0');

  // OSC Config
  const oscConfig = {
    ip: oscIP,
    port: overrideConfig?.port || oscOutPort,
  };

  // init timer
  global.timer = new EventTimer(server, config.timer, oscConfig, data.http);
  global.timer.setupWithEventList(data.events);
  global.timer.info('SERVER', returnMessage);
  return returnMessage;
};

/**
 * @description clean shutdown app services
 * @return {Promise<void>}
 */
export const shutdown = async () => {
  // shutdown express server
  server.close();

  // shutdown OSC Server
  shutdownOSCServer();

  // shutdown timer
  global.timer.shutdown();
};

// register shutdown signals
process.once('SIGHUP', shutdown)
process.once('SIGINT', shutdown)
process.once('SIGTERM', shutdown)

export { server, app };
