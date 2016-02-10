// Generated on 2014-08-07 using generator-webapp 0.4.6
'use strict';
var path = require('path');
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            files: '<%= yeoman.app %>/ts/**/*.ts',
            tasks: ['ts:dev']
        },
        express: {
            options: {
                port: 9000,
                hostname: 'localhost',
                server: path.resolve('./server/server.js')
            },
            livereload: {
                options: {
                    livereload: false,
                    serverreload: false,
                    open:true,
                    bases: [path.resolve('./.tmp'), path.resolve(__dirname, '<%= yeoman.app %>')]
                }
            }
        },
        clean: {
            server: '.tmp'
        },

        ts: {
            dev : {
                src: ["<%= yeoman.app %>/ts/**/*.ts", "!node_modules/**/*.ts"],
                options: {
                    "fast":'always',
                    "module": "commonjs",
                    "emitDecoratorMetadata": true,
                    "experimentalDecorators": true,
                    "removeComments": false,
                    "noImplicitAny": false,
                    "failOnTypeErrors": false
                }
            }
        }


    });

    grunt.registerTask('serve', [
        'clean:server',
        'ts',
        'express',
        'watch'
    ]);


    grunt.registerTask('default', 'serve');
};
