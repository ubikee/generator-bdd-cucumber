// features/support/hooks.js
module.exports = function () {

    this.registerHandler('BeforeFeatures', function (event, done) {
        // Start application containers, double servers, etc...
    });

    this.registerHandler('AfterFeatures', function (event, done) {
        // Shutdown collaborators
    });

};