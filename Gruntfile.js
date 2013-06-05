module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    ngdocs: {
      options: {
        dest: 'build',
        scripts: ['angular.js'],
        html5Mode: false,
        title: "Agile Testing Tutorial"
      },
      tutorial: {
        src: ['docs/content/**/*.ngdoc'],
        title: 'Tutorial'
      },
      api: {
        src: ['tutorial/todo/js/**/*.js'],
        title: "Todo Code"
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build',
          keepalive: true
        }
      }
    },
    watch: {
      files: ['docs/content/**/*.ngdoc', 'tutorial/todo/js/**/*.js'],
      tasks: 'ngdocs'
    }
  });

  grunt.registerTask('default', ['ngdocs']);

};
