module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['../js/**/*.js']
    }
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
