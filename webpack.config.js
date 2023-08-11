const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    // features: path.resolve(__dirname, './src/features/index.js')
  },
  // experiments: {
  //   outputModule: true
  // },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    // library: {
    //   type: 'module'
    // }
  },
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