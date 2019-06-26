import express from 'express';
import cors from 'cors';
import { Routes } from '../routes/routes';

export class Server {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.config();        
    }

    private config(): void {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use('/api', (new Routes).Router);
    }
}
