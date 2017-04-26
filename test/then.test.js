const { fetchHeaders } = require('../dist/sample');

describe('test fetchHeaders from JS with Promises', function () {
    it('should return headers as an object', function (done) {
        fetchHeaders('http://www.google.com')
            .then(headers => {
                console.log('complete your JS test here.');
                done();
            })
            .catch((err) => done(err));
    });
});