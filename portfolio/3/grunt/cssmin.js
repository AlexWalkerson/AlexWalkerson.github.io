module.exports = {
    all: {
        files: [{
          expand: true,
          cwd: 'assets/css', //откуда
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css', //куда
          ext: '.min.css'
        }] 
    }  
};