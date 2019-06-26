import request from 'supertest';
import express from 'express';
import { Server } from '../../../src/app/server/server';

describe("Tests on users api", () => {
    let server: express.Application;

    beforeEach(() => {
        server = (new Server).server;
    });

    it("Should get status code 200 on /api/users", (done) => {
        request(server).get('/api/users').then((response: any) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("Should get status code 404 on /", (done) => {
        request(server).get('/').then((response: any) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});
