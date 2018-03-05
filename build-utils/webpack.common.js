const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: commonPaths.appEntry,
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'file-loader?name=[path][name].[ext]' },
      { test: /\.html$/, loader: 'raw-loader' },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|ico)$/,
        loader: 'url-loader?limit=8192&name=i/i-[hash:10].[ext]',
      },
    ],
  },
  resolve: {
    modules: ['bower_components', 'node_modules', 'src'],
    alias: {
      angular: 'angular',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: commonPaths.outputPath,
  },
  externals: { jquery: 'jQuery' },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // this assumes your vendor imports exist in the node_modules directory
      minChunks: module =>
        module.context &&
        (module.context.includes('node_modules') ||
          module.context.includes('bower_components')),
    }),
  ],
};

module.exports = config;
