var config = require('../config.json');
module.exports = {
    all: {
        files: [{
          expand: true,
          cwd: config.distCssDir, //откуда
          src: ['*.css', '!*.min.css'],
          dest: config.distCssDir, //куда
          ext: '.min.css'
        }] 
    }  
};