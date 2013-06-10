/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    karma: {
      options: {
        runnerPort: 9999,
        singleRun: true,
        autoWatch: false,
        browsers: ['Chrome'],
        background: true
      },
      unit: {
        configFile: 'config/unit.conf.js'
      },
      coverage: {
        configFile: 'config/unit-cov.conf.js'
      },
      e2e: {
        configFile: 'config/e2e.conf.js'
      }
    },
    connect: {
      server: {
        options: {
          port: 9999,
          base: '../../todo'
        }
      }
    }
  });

  // Load up npm task plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['unit', 'coverage', 'acceptance']);
  grunt.registerTask('acceptance', ['connect', 'karma:e2e']);
  grunt.registerTask('unit', 'karma:unit');
  grunt.registerTask('coverage', 'karma:coverage')
  grunt.registerTask('server', 'connect:server:keepalive')
};
