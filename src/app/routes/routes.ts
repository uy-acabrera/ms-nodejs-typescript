import { Router } from 'express';
import { UserRoutes } from './users.routes';

export class Routes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.config();        
    }

    public get Router() {
        return this.router;
    }

    private config(): void {
        // Add your routes here
        UserRoutes.config(this.router);
    }
}