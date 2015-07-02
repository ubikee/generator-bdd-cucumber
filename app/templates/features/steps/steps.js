module.exports = function () {

    var expect      = require('chai').expect;
    var fixtures    = require('../fixtures/fixtures');
    this.World      = require('../support/world').World;

/*
    // this variables keep local references needed between steps
    var response = null;

    this.When(/^request "([^"]*)"$/, function (resource, done) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        this.API.GET(resource)
            .then(function (res) { 
                response = res;
                done();
            })
            .fail(function (err) {
                done.fail(new Error(err));
            });
    });
*/

}