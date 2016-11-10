var config = require('../config.json');
module.exports = {

  options: {
    spawn: false,
    livereload: true
  },

  scripts: {
    files: [
      config.srcJsDir+'/*.js'
    ],
    tasks: [
      'concat',
      'uglify',
    ]
  },

  styles: {
    files: [
      config.srcSassDir+'/*/*.scss',config.srcSassDir+'/*.scss'
    ],
    tasks: [
    // 'compass:prod',
    'compass:dev',
    ]
  },
};