const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // compile js to env compatibile
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // implicitly require all assets referenced in html files
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },

      // copy assets to dist directory
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
        },
      }
    ]
  },
  plugins: [
    // create indexedDB.html file based on src/index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
};
