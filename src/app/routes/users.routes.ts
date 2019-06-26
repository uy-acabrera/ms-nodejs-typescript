import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';

export class UserRoutes {
    constructor() {}

    static config(router: Router) {
        // Routes connfig examples
        router.get('/users', UsersController.getUsers);
        router.get('/users/:documentType/:document', UsersController.getUsers);
        router.get('/users/:firstname', UsersController.getUsers);
        router.post('/users', UsersController.postUser);
        router.put('/users', UsersController.putUser);
        router.delete('/users', UsersController.deleteUser);
    }
}