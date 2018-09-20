import * as express from 'express';
import createContainer from '../framework/createContainer';

const index = (req, res, next) => {
	const c = req.ctx;

	res.send({
		message: "Welcome to the Lobby",
		services: c
	}).status(200);
}

export default () => {
	
	const router = express.Router();

	router.get('/', index);

	return router;
}