const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    alias: {
      'styles': path.resolve(__dirname, 'resources/sass'),
      'components': path.resolve(__dirname, 'resources/js/components'),
      'views': path.resolve(__dirname, 'resources/js/views'),
      'api': path.resolve(__dirname, 'resources/js/services/api'),
      'mixins': path.resolve(__dirname, 'resources/js/mixins'),
    },
  },
};
