const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
  
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
    },
    devServer: {
      historyApiFallback: true,
    },
  
    plugins: [
      new HTMLWebpackPlugin({
        template: "public/index.html",
      }),
    ],
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(scss||css)$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };