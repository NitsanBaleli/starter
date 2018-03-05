const commonPaths = require('./common-paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`style.css`),
    new ngAnnotatePlugin({
      add: true,
      // other ng-annotate options here
    }),
  ],
};

module.exports = config;
