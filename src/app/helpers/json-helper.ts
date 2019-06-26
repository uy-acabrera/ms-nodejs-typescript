import { Response } from 'express';

export function sendJsonResponse(res: Response, status: number, content: {}, error?: any) {
    let response = {
        status: status,
        content: content,
        error: error
    };
    res.status(status);
    res.json(response);            
};