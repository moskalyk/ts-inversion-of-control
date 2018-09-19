import Gamer from '../models/Gamer';

export default class GamerFactory {
	public create(id: number, name: string) : Gamer {
		return new Gamer(id, name);
	}
}