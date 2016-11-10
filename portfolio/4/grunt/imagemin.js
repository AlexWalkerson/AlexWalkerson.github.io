var config = require('../config.json');
module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: config.srcImgDir,
      src: ['*.{png,jpg,gif}', '*/*.{png,jpg,gif}'],
      dest: config.distImgDir
    }]
  }
};