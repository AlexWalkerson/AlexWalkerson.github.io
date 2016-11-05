module.exports = {
    prod: {                   // Target
      options: {              // Target options
        sassDir: 'src/scss',
        cssDir: 'assets/css',
        // imagesDir: 'assets/img',
        // imagesPath: 'assets/img',
        fontsDir: 'assets/font',
        httpFontsDir: 'assets/font',
        outputStyle: 'nested',
        environment: 'production',
        assetCacheBuster: false,
        raw: 'require "bootstrap-sass"\nSass::Script::Number.precision = 10\n',
      }
    },
    dev: {                    // Dev target
      options: {
        sourcemap: true,
        sassDir: 'src/scss',
        cssDir: 'assets/css',
        // imagesDir: 'assets/img',
        // fontsDir: 'assets/font',
        httpFontsDir: 'assets/font',
        outputStyle: 'nested',
        assetCacheBuster: false,
        raw: 'require "bootstrap-sass"\nSass::Script::Number.precision = 10\n',
      }
    }

};