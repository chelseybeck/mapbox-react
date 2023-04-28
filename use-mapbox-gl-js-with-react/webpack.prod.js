const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'production',
});

//git add .
//git commit -am "added webpack"
/