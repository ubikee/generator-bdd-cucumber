// features/support/clients/http-client.js
var request = require( 'request')
  , Q       = require('q');

module.exports = function (domain) {

    return {

        GET : function (url) {
            var deferred = Q.defer();
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            request({
                    method : 'GET',
                    uri    : domain+url,
                    json   : true,
                    agentOptions : { rejectUnauthorized : false }
                }, function (err, res, body) {
                    if (err) 
                        deferred.reject(new Error("request GET error : "+err));
                    deferred.resolve(res);
                });
            return deferred.promise;
        },

        POST :function (url, data) {
            var deferred = Q.defer();
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            request({
                    method : 'POST',
                    uri    : domain+url,
                    json   : true,
                    body   : data,
                    agentOptions : { rejectUnauthorized : false }
                },function (err, res, body) {
                    if (err)
                        deferred.reject(new Error("request POST error : "+err));
                    deferred.resolve(res);
                });
            return deferred.promise;
        }
    }
}