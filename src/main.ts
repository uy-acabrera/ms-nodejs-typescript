import { Server } from './app/server/server';
import { environment } from './environments/environment';

export class Main {
    constructor() {
        const PORT = environment.config.port;
        const server = (new Server).server;

        server.listen(PORT, () => {
            console.info(`Express server listening on port ${PORT}`);
        })
    }
}

new Main();