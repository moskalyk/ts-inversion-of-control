
import IMatchMaker from '../interfaces/IMatchMaker';
import WaitingRoom from '../repositories/WaitingRoom';
import IPeer from '../interfaces/IPeer';
import Gamer from '../models/Gamer';

export default class WaitingRoomService {

	private repository: WaitingRoom;

	constructor(repository : WaitingRoom) {
		 this.repository = repository;
	}

  getDetails(): string{
      return this.repository.getMatch();
  }

 	get(): Gamer[] {
      return <Gamer[]> this.repository.getList();
  }

  getById(id : number): Gamer {
     return <Gamer> this.repository.getById(id);
  }

  add(gamer : Gamer): void {
  	this.repository.add(gamer);
  }

  delete(peer : IPeer): Gamer {
    return <Gamer> this.repository.delete(peer);
  }
}
