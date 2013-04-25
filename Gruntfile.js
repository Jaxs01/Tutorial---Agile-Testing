var util = require('./lib/grunt/utils.js');

module.exports = function(grunt) {
  //grunt plugins
  grunt.loadTasks('lib/grunt');

  var NG_VERSION = util.getVersion();
  var dist = 'agiletesting-'+ NG_VERSION.full;

  util.init();

  //config
  grunt.initConfig({

    docs: {
      process: ['build/docs/*.html', 'build/docs/.htaccess']
    }

  });

  grunt.registerTask('package', ['docs']);
  grunt.registerTask('default', ['package']);
};
