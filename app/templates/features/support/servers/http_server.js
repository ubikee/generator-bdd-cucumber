// features/support/servers/http_servers.js
module.exports = function (config) {

    var express    = require('express')
      , validator  = require('express-validator')
      , bodyParser = require('body-parser')
      , app        = express()
      , server;

    app.use(bodyParser.json());
    app.use(validator());
    var routes = express.Router();
    app.use('/',routes);
    app.set('port', process.env.PORT || config.port);

    return {
        routes : routes,
        start : function (callback) {
            server = app.listen(app.get('port'), function () {
                console.log('Express server listening on port ' + server.address().port);
                callback.apply(this, arguments);
            });
        },
        stop : function (callback) {
            server.close(callback);
            console.log('Express server stopped');
        }
    }
}