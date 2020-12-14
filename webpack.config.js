const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  target: "web",
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    disableHostCheck: true,
    public: "0.0.0.0:0",
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ["vue-loader"],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".vue", ".css"],
  },
}
