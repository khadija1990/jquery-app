module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //begin tasks declaration

    grunt.initConfig({
        //begin tasks declaration
        //watch for js files change


        watch: {
            script: {
                file: ['src/js/app.js'],
                task: ['jshint'],

            }

        }


    });
    grunt.registerTasks('default', ['watch']);
};