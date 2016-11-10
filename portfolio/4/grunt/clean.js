
var config = require('../config.json');
module.exports = {  
	all: {
		src: [config.distJSDir + '/*.js', config.distCssDir + '/*.*']  
	},
	img: {
		src: [config.distImgDir+'/*']
	},
};