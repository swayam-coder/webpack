const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],  /*array in case we need to have multiple loaders*/ /*babel loader will look for a babelrc or babel.config file*/
        },
      ],
    },
    devtool: "source-map",

    plugins: [
      new BundleAnalyzerPlugin()
    ],
};