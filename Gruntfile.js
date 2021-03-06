module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-open');

    grunt.initConfig({

        ngdocs: {
            options: {
                dest: 'app/public',
                scripts: ['angular.js', '../js/multichoice.js', '../js/quizes.js', '../js/screencast.js', '../js/workspace.js', '../js/timer.js', '../js/links.js', '../js/tabs.js'],
                styles: ['css/multichoice.css', 'css/timer.css', 'css/images.css'],
                html5Mode: false,
                title: "Agile Testing",
                extensions: ['tabs', 'notes'],
                ignoreFile: 'docs/ignore.words',
                indexTemplate: 'docs/index.tmpl'
            },
            overview: {
                src: ['docs/content/overview/**/*.ngdoc'],
                title: 'Overview'
            },
            'thetestingzoo': {
                src: ['docs/content/the-testing-zoo/**/*.ngdoc'],
                title: 'Zoo'
            },
            'specbyexample': {
                src: ['docs/content/spec-by-example/**/*.ngdoc'],
                title: 'Spec by Example'
            },
            'thetestingcoin': {
                src: ['docs/content/the-testing-coin/**/*.ngdoc'],
                title: 'Coin'
            },
            'nonfunctionaltest': {
                src: ['docs/content/nonfunctionaltest/**/*.ngdoc'],
                title: 'Non Functional'
            },
            'communication': {
                src: ['docs/content/communication/**/*.ngdoc'],
                title: 'Communication'
            }
//      planning: {
//        src: ['docs/content/planning/**/*.ngdoc'],
//        title: 'Planning'
//      }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app/public',
                    keepalive: true
                }
            }
        },
        open : {
            dev : {
                path: 'http://localhost:9001'
            },
            prod : {
                path : 'http://test:secret@localhost:9955'
            }
        },
        watch: {
            tutorial: {
                files: ['docs/content/**/*.ngdoc'],
                tasks: 'ngdocs'
            },
            assets: {
                files: ['docs/img/**/*', 'js/**/*', 'css/**/*'],
                tasks: 'copy'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'docs', src: ['img/**'], dest: 'app/public'},
                    {expand: true, cwd: '.', src: ['js/**', 'css/**'], dest: 'app/public'}
                ]
            }
        },
        clean: ["app/public"]
    });

    grunt.registerTask('default', ['clean', 'ngdocs', 'copy']);
    grunt.registerTask('build', ['default', 'open:dev']);
    grunt.registerTask('server', ['build', 'connect']);

};
