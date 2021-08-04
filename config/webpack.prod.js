const path = require("path");

module.exports = {
    mode: "production",

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
};