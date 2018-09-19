
import IMatchMaker from '../interfaces/IMatchMaker';
import IPeer from '../interfaces/IPeer';

export default class WaitingRoom implements IMatchMaker<IPeer> {

	public peers: IPeer[];
	public matchName: string;

	constructor(matchName : string) {
		this.peers = new Array<IPeer>();
		this.matchName = matchName;
	}

	getMatch() : string {
		//TODO: Peer List
		return this.matchName;
	}

	getList() : IPeer[] {
		//TODO: Peer List
		return this.peers;
	}

	// Extends
	add(peer: IPeer) : void {
		/* TODO: Create a abstract / factory of some sort? */
		this.peers.push(peer)
	}
		// Extends
	get(peer: IPeer) : IPeer {
		//TODO: Requires better logic
		return this.peers.filter(peer => peer == peer)[0];
	}

	getById(peerId: number) : IPeer {
		//TODO: Requires better logic
		return this.peers.filter(peer => peerId == peer.id)[0];
	}

	delete(peer : IPeer) : IPeer {
		var targetIndex = this.peers.indexOf(peer);
        if (targetIndex < -1) return null;
        return this.peers.splice(targetIndex, 1)[0]; 
	}

	getMatchedList(peer: IPeer) : Array<IPeer> {

		/* TODO: Apply some filter here, possible pass in strategy pattern */
		const matchedPeerList = this.peers;

		return matchedPeerList
	}
}
