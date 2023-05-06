const merge = require('webpack-merge');
const path = require('path');
const config = require('./use-mapbox-gl-js-with-react/webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, './use-mapbox-gl-js-with-react/dist'),
    publicPath: '/',
    writeToDisk: true,
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});
