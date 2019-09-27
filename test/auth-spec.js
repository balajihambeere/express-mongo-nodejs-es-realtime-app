import request from 'supertest';
import app from '../server';
import { expect } from 'chai';


describe("NodeJS RESTFUL API", () => {
    it("respond server running status", (done) => {
        request(app).get("/").expect(200).end(done);
    });
});
