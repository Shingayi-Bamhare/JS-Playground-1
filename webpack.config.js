const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
  context: PATHS.src,
  entry: {
    app: './app.js',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    // rules - formerly known as loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            [
              'es2015',
              // don't convert modules to CommonJS
              {
                modules: false
              },
            ],
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
  ],
};
