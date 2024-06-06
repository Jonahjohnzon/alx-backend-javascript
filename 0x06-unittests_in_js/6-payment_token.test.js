const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((rs) => {
        expect(rs).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
});
