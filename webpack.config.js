const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  target: 'web',
  devtool: 'eval-source-map',
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    hot: true,
    inline: true,
    disableHostCheck: true,
    public: "0.0.0.0:0"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: "development"
};
