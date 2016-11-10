module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
  grunt.loadNpmTasks('grunt-combine-media-queries');
};