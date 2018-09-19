import * as express from 'express';
import createContainer from '../framework/createContainer';
import Gamer from '../models/Gamer';

const peerList = (req, res, next) => {
	const c = req.ctx;

	const list = c.resolve("WaitingRoomService").get();
	res.send(list).status(200);
}

const getMatch = (req, res, next) => {
	const c = req.ctx;

	const name = c.resolve("WaitingRoomService").getDetails();
	res.send(name).status(200);
}

const addPeer = (req, res, next) => {
	const c = req.ctx;

	c.resolve("WaitingRoomService")
	.add(new Gamer(c.resolve("WaitingRoomService")
		.get().length++, req.params.name));

	const list = c.resolve("WaitingRoomService").get();
	res.send(list).status(200);
}

export default () => {
	
	const router = express.Router();

	// TODO: Apply Decorator to inject container into requests.

	// @Container
	router.get('/peers', peerList);

	// @Container
	router.get('/getMatch', getMatch);

	// @Container
	router.get('/addPeer/:name', addPeer);

	return router;
}