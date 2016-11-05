module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      'src/js/*.js'
    ],
    tasks: [
      // 'jshint',
      'concat',
      'uglify',
    ]
  },

  styles: {
    files: [
      'src/scss/*/*.scss','src/scss/*.scss'
    ],
    tasks: [
    // 'compass:prod',
    'compass:dev',
      // 'sass:dev',
    ]
  },
};