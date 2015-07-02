var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    projectName        : this.appname,
    projectDescription : "",

    prompting: function () {
        var done = this.async();
        this.prompt([
                { type : 'input', name : 'name', message : 'Your project name', default: this.appname },
                { type : 'input', name : 'description', message : 'Your project description', default: ''}
            ], function (answers) { 
                this.projectName = answers.name;
                this.projectDescription = answers.description;
                done();
            }.bind(this)
        );
    },

    writing : function () {
        this.template(this.templatePath('package.json'), this.destinationPath('package.json'), this);
        this.directory(this.templatePath('features'), this.destinationPath('features'));
    },

    install : function () {
        this.npmInstall();
    }
});

