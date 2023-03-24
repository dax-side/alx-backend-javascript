const request = require('request');
const chai = require('chai')
const { expect } = require('chai');


describe('Index page', () => {
  it('1) should return correct status code', (done) => {
    request('http://localhost:7865', 'GET', (err, res, body) => {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome to the payment system');
        });
        done();
      });
  
  it('2) should correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/10', 'GET', (err, res, body) => {
            if (err) throw err;
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 10');
      });
      done();
    });

    it('3) should correct status code when :id is NOT a number', (done) => {
      request('http://localhost:7865/cart/10', 'GET', (err, res, body) => {
              if (err) throw err;
              expect(res.statusCode).to.equal(404);
        });
        done();
      });
});
