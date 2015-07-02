// features/support/world.js
var HTTPClient = require('./clients/http-client');

var WorldConstructor = function WorldConstructor(callback) {

    var world = {
        // declare clients to the collaborators needed in your steps
    }

    callback(world);
};

exports.World = WorldConstructor;