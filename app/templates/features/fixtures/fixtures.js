var fs   = require('fs');
var path = require('path');

module.exports = {
    save : function (name, data, done) {
        fs.writeFile(path.join(__dirname,"../fixtures/"+name), response.body, function(err) {
            if(err) {
                return console.log(err);
            }
            done();
        }); 
    },
    load : function (name) {
        try {   
            var data = fs.readFileSync(path.join(__dirname, "../fixtures/"+name));
            return data;
        } catch (err) {
            console.log(err);
            //TODO: handle error or throw 
        }
    }
}