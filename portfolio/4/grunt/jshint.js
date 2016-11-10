var config = require('../config.json');
module.exports = {
  options: {
    reporter: require('jshint-stylish')
  },

  main: [
    config.srcJsDir+'/*.js'
  ]
};