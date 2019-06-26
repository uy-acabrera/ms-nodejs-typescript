import { Request, Response } from 'express';
import { sendJsonResponse } from '../helpers/json-helper';

export class UsersController {
    constructor() { }

    static getUsers = (req: Request, res: Response) => {
        let params = req.params;
        sendJsonResponse(res, 200, `Successful! ${JSON.stringify(params)}`);
    }
    
    static postUser = (req: Request, res: Response) => {
        let body = req.body;
        sendJsonResponse(res, 200, `Successful! ${JSON.stringify(body)}`);
    }
    
    static putUser = (req: Request, res: Response) => {
        let body = req.body;
        sendJsonResponse(res, 200, `Successful! ${JSON.stringify(body)}`);
    }

    static deleteUser = (req: Request, res: Response) => {
        let body = req.body;
        sendJsonResponse(res, 200, `Successful! ${JSON.stringify(body)}`);
    }    
}
