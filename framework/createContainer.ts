import Container from './Container';
import WaitingRoom from '../repositories/WaitingRoom';
import Gamer from '../models/Gamer';
import WaitingRoomService from '../services/WaitingRoomService';

export default () => {
	console.log('Creating the container');
	const container = Container;

	// Set up IoC Container
	container.register("WaitingRoomService", new WaitingRoomService(new WaitingRoom("Game")));

    return container;
}