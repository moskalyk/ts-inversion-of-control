import * as express from 'express';
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

//TODO: Abstract this to the index Controller
export default () => {
	
	const router = express.Router();

	router.get('/peers', peerList);

	router.get('/getMatch', getMatch);

	router.get('/addPeer/:name', addPeer);

	return router;
}