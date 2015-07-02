var Docker  = require('dockerode')
  , Q       = require('q');

var exports = module.exports = {}

/**
 * Pull docker image
 *
 * @params imageName
 */
exports.pull = function (imageName) {
    var deferred = Q.defer();
    var docker = new Docker();
    docker.pull(imageName, function (err, stream) {
        if (err) 
            return deferred.reject(new Error("Docker image PULL error : "+err));
        docker.modem.followProgress( stream, deferred.resolve, function () { 
            process.stdout.write('='); 
        });
    });
    return deferred.promise;
}

    /*
     * Create docker container
     *
     * @param name
     * @param config
     */
    exports.container = function (config) {

        var _config = config;

        return function () {
            
            var deferred = Q.defer();
            var docker = new Docker();
            
            var config = {
                Image      : _config.Image,
                name       : _config.name,
                Volumes    : _config.volumes,
                HostConfig : _config.HostConfig
            }

            docker.createContainer( config, function (err, container) {
                if (err != null) { 
                    return deferred.reject(new Error("Docker CREATE container error : "+err));
                } else {    
                    deferred.resolve(container); 
                }
            });
            return deferred.promise;
        }
    }

    /**
     * Start docker container 
     *
     * @param config
     */
    exports.start = function (config) {

        var _config = config;

        return function () {
            var deferred = Q.defer();
            var docker = new Docker();
            var container = docker.getContainer(_config.name);
            container.start( _config.HostConfig, function (err, data) {
                if (err!=null) {
                    deferred.reject(new Error("Docker START container error : "+err));
                } else {
                    setTimeout(function () {     
                        deferred.resolve(container); 
                    },5000)
                }
            });
            return deferred.promise;
        }
    }

    /*
     * Stop docker container
     * 
     * @param name
     */
    exports.stop = function (name) {

    }

    /**
     * Remove docker container
     *
     * @param name
     */
    exports.kill = function (name) {

        var _name = name;
        
        return function () {
            var deferred = Q.defer();
            var docker = new Docker();
            var container = docker.getContainer(_name);
            container.remove( function (err) {
                if (err) {
                    deferred.reject(new Error("Docker REMOVE container error : "+err));
                } else  {
                    console.log('Doker remove container')
                    return deferred.resolve();
                }
            });
            return deferred.promise;
        }
}
