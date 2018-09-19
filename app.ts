import createContainer from './framework/createContainer';
import * as express from 'express'

// TODO: Possible create an Express Provider?
import ExpressService from './services/ExpressService';
import IndexRouter from './controllers/index';

import Gamer from './models/Gamer';

const app = express();
var container = createContainer();

// Set up Routes
container.register("ExpressService", new ExpressService(app, container));
container.resolve("ExpressService").registerRoute("/", IndexRouter());

// Run app
container.resolve("ExpressService").run(process.env.PORT || 3000);
