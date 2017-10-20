const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env', {
                  targets: {
                    browsers: [
                      'chrome >= 12',
                      'IE >= 10',
                      'Firefox >= 16',
                      'Opera >= 15',
                      'Safari >= 4',
                      'Android >= 4',
                      'iOS > 4'
                    ],
                    node: 'current',
                  },
                }
              ]
            ],
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  performance: {
    hints: false,
  }
};
