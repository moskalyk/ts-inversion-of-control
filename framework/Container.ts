
class Container {
	
	private services: Object;

	constructor() {
		this.services = {};
	}

	public register(name : string, instance: any) : void {
		if(!this.services.hasOwnProperty('name'))
			this.services[name] = instance;
	}

	public resolve(name : string) : any{
		return this.services[name];
	}
}

export default new Container();