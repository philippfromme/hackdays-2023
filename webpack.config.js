const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/app.js'),
  module: {
    rules: [
      {
        test: /\.bpmn$/i,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: false,
    liveReload: false
  }
};