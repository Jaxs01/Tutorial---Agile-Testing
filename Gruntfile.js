module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({

    ngdocs: {
      options: {
        dest: 'build',
        scripts: ['angular.js', '../js/multichoice.js', '../js/quizes.js', '../js/screencast.js', '../js/workspace.js'],
        styles: ['css/multichoice.css'],
        html5Mode: false,
        title: "Agile Testing"
      },
      overview: {
        src: ['docs/content/overview/**/*.ngdoc'],
        title: 'Overview'
      },
      exploratory: {
        src: ['docs/content/exploratory/**/*.ngdoc'],
        title: 'Exploratory Testing'
      },
      'thetestingcoin': {
        src: ['docs/content/the-testing-coin/**/*.ngdoc'],
        title: 'The Testing Coin'
      },
      'thetestingzoo': {
        src: ['docs/content/the-testing-zoo/**/*.ngdoc'],
        title: 'The Testing Zoo'
      },
      planning: {
        src: ['docs/content/planning/**/*.ngdoc'],
        title: 'Planning'
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
          {expand: true, cwd: 'docs', src: ['img/**'], dest: 'build/'},
          {expand: true, cwd: '.', src: ['js/**', 'css/**'], dest: 'build/'}
        ]
      }
    }
  });

  grunt.registerTask('default', ['ngdocs', 'copy']);

};
