
import IPeer from "./IPeer";

 export default interface IMatchMaker<T> {
	peers: T[],
	matchName: string,
	getList(): T[]
	add(peer : IPeer) : void;
	getById(peerId : number) : IPeer;
	get(peer : IPeer) : IPeer;
	getMatchedList(peer : IPeer) : IPeer[]; //TODO: Abstract this out?
}