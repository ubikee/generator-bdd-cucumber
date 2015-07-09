module.exports = function () {

    var path = require('path')
      , exec = require('child_process').execSync
      , docker = require('./dockertasks');

    return {
        
        create : function (callback, error) {
            try {
                console.log('create')
                exec('sudo'+path.join(__dirname,'./create'));
                setTimeout(function () {
                    callback();
                }, 2000)
            } catch (err) {
                error(err);
            }
        },

        start : function (callback, error) {
            try {
                exec('sudo '+path.join(__dirname,'./start'));
                setTimeout(function () {
                    callback();
                }, 5000);
            } catch (err) {
                error(err);
            }
        },

        stop : function (callback, error) {
            try {
                exec('sudo '+path.join(__dirname, './stop'));
            } catch (err) {
                error(err);
            }
        }
    }
}