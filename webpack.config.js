path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,      
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
};