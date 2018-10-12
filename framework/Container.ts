
class Container {
	
	private services: Object;

	constructor() {
		this.services = {};
	}

	public register(name : string, instance: any) : void {
		if(!this.services.hasOwnProperty('name'))
			this.services[name] = instance;
	}

	public resolve(name : string) : any {
		const service: Object = this.services[name];

		// TODO: If the instance is contained within the object
		// if(service instanceof Object)

		return this.services[name];
	}
}

export default new Container();