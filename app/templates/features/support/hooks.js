// features/support/hooks.js
module.exports = function () {

    //var system1 = require('./containers/docker-script')('System1Container');

    this.registerHandler('BeforeFeatures', function (event, done) {
        // Start application containers, double servers, etc...
        // Example:
        // system1.start(done, function (err) { ... });
        done();
    });

    this.registerHandler('AfterFeatures', function (event, done) {
        // Shutdown collaborators
        // Example:
        // system1.stop(done, fcuntion (err) { ... });
        done();
    });

};