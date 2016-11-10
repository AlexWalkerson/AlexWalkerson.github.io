var config = require('../config.json');
module.exports = {
    dist: {
        files: {
          [config.distJSDir+'/build.min.js']: [config.distJSDir+'/build.js']
        }
      }  
};