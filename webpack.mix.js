let path = require('path');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  extractVueStyles: true,
  globalVueStyles: path.resolve(__dirname, 'resources/sass/_global.scss'),
});


mix.webpackConfig({
  resolve: {
    alias: {
      'styles': path.resolve(__dirname, 'resources/sass'),
      'components': path.resolve(__dirname, 'resources/js/components'),
    }
  },
});

mix.js('resources/js/app.js', 'public/js').sourceMaps();
  mix.sass('resources/sass/app.scss', 'public/css');

mix.version();

