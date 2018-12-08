
import IPeer from '../interfaces/IPeer';

export default class Gamer implements IPeer {

	public id: number;
	public name: string;
	public wins: number;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
		this.wins = 0;
	}

	getName(): string {
		return this.name;
	}

	// add static method to Gamer model
	Gamer.prototype.addWin = function(): void {
		this.wins++;
	}
}
