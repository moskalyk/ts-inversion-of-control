import indexController from '../controllers/index';
import { IRoute, Application } from 'express';

export default class ExpressService {

	private app: any;
	private container: any;

	constructor(app: any, container: any){
		this.app = app;
		this.container = container;
		this.setUpMiddleWare();
	}

	private setUpMiddleWare(): void {
		// Add headers
		this.app.use((req, res, next) => {

		    // Website you wish to allow to connect
		    res.setHeader('Access-Control-Allow-Origin', '*');

		    // Request methods you wish to allow
		    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

		    // Request headers you wish to allow
		    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

		    // Set to true if you need the website to include cookies in the requests sent
		    // to the API (e.g. in case you use sessions)
		    res.setHeader('Access-Control-Allow-Credentials', true);

		    // Pass to next layer of middleware
		    next();
		});

		this.app.use((req, res, next) => {
			console.log(this.container);
			req.ctx = this.container;
			next();
		});
	}

	// Name of the route and the Express Route Object
	registerRoute(routeName: string, route: IRoute){
		console.log(`Registering Route:${routeName}`);
		this.app.use(routeName, route);
	}

	// Runs the App on a port number
	run(port: number){
		this.app.listen(port, () => {
			console.log(`Listening on Port: ${port}`);
		});
	}
}