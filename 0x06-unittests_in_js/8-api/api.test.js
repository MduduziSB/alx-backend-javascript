const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('Index page', () => {
    it('should return correct status code', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
    });

    it('should return correct result', async () => {
        const response = await request(app).get('/');
        expect(response.text).to.equal('Welcome to the payment system');
    });
});

