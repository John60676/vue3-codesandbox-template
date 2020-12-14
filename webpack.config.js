const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const dev = env && env.dev;
  const prod = env && env.prod;
  const codesandbox = env && env.codesandbox;

  return {
    entry: "./src/index.js",
    target: 'web',
    devtool: dev && "cheap-module-eval-source-map",
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
        template: path.resolve(__dirname, "./index.html")
      })
    ],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
          exclude: /(node_modules|bower_components)/,
          use: ["babel-loader"]
        }
      ]
    },
    mode: dev || codesandbox ? "development" : prod ? "production" : "none"
  };
};
