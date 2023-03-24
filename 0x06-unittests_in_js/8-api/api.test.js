const request = require('request');
const chai = require('chai')
const { expect } = require('chai');


describe('Index page', () => {
  it('should return correct status code', (done) => {
    request('http://localhost:7865', 'GET', (err, res, body) => {
          if (err) throw err;
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome to the payment system');
  });
  done();
  });
});
