var config = require('../config.json');
module.exports = {

        options: {
            log: false
        },
        your_target: {
            files: {
               [config.distCssDir]: [config.distCssDir+'/*.css']
            }
        }

};

