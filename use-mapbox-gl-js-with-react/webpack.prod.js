const merge = require('webpack-merge');
const config = require('.use-mapbox-gl-js-with-react/webpack.config.js');

module.exports = merge(config, {
  mode: 'production',
});
