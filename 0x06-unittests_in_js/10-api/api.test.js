const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response when :id is a number', (done) => {
    request.get(`${URL}/cart/123`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  });

  it('GET /cart/:id returns 404 when :id is not a number', (done) => {
    request.get(`${URL}/cart/abc`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response when :id is a number < 0', (done) => {
    request.get(`${URL}/cart/-123`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns correct response', (done) => {
    request.post(
      `${URL}/login`,
      {
        json: {
          userName: 'JohnDoe'
       }
      },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome JohnDoe');
        done();
      });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
