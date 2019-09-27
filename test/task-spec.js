import request from 'supertest';
import app from '../server';

import { expect } from 'chai';

describe("POST /tasks", async () => {
    let resultToken = null;
    before(async () => {
        const result = await request(app).post("/api/signin")
            .send({ "email": "balaji.hambere@raptei.com", "password": "Test@123" })
            .expect(200);
        const { data } = result.body;
        const { token } = data;
        return new Promise((resolve) => {
            setTimeout(() => {
                resultToken = token;
                resolve();
            }, 200);
        });
    });


    it("it will create new Project", async () => {
        // this.timeout(10000);
        const result = await request(app).post("/api/projects")
            .send({ "name": "Shopping Weekend" })
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + resultToken)
            .expect(200);
        return result;
    });
});