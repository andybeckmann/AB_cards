// -- Grunt Boilerplate

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // -- SASS Compilation

        'dart-sass': {
            target: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },
        
        // -- CSS Minification

        cssmin: {
            combine: {
                files: {
                    'css/production.css': [
                        'css/main.css',
                    ]
                },
 
                options:{
                    report: 'min'
                }
            }
        },
        
        // -- Javscript Hints

        jshint: {
            options: {
                eqnull: true,
                eqeqeq: false,
                esversion: 6,
            },
            beforeconcat: ['js/AB_cards.js']
        },

        // -- Javascript Concatenation

        concat: {   
            dist: {
                src: [
                    'js/AB_cards.js'
                ],
                dest: 'js/build/global.js',
            }
        },

        // -- Javascript Minification

        rollup: {
            options: {},
            files: {
              'js/build/global.min.js': ['js/build/global.js'],
            },
        },

        // -- Watch

        watch: {
 
            scripts: {
                files: ['js/*.js'],
                tasks: ['jshint:beforeconcat','concat','rollup'],
                options: {
                    spawn: false,
                }
            },
 
            css: {
                files: ['scss/*.scss','scss/**/*.scss','css/**/*.css'],
                tasks: ['dart-sass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // -- Plugins

    require('load-grunt-tasks')(grunt);
 
    grunt.registerTask('default', ['jshint:beforeconcat','concat', 'rollup', 'dart-sass', 'cssmin', 'watch']);
};