var config = require('../config.json');
module.exports = {
    dist: {
        // src: 'src/js/*.js',  // какие файлы конкатенировать
        src: [
        config.srcJsDir+'/transition.js', 
        config.srcJsDir+'/collapse.js', 
        config.srcJsDir+'/owl.carousel.min.js', 
        // config.srcJsDir+'/dropdown.js', 
        // config.srcJsDir+'/jquery.scrollTo2.1.3.min.js', 
        // config.srcJsDir+'/waypoints.min.js', 
        // config.srcJsDir+'/jquery.bpopup.min.js', 
        config.srcJsDir+'/main.js', 

        ],
        dest: config.distJSDir+'/build.js'  // куда класть
    }    
};