const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    // 应用入口
    entry: {
        app: path.join(__dirname, '../src/index.js')  // app.js作为打包的入口
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
