
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

	// Extends the base of IPeer
	addWin(): void {
		this.wins++;
	}
}