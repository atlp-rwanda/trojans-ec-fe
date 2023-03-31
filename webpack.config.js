const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const vercelEnv = process.env;
const envKeys = env
  ? Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {})
  : Object.keys(vercelEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(vercelEnv[next]);
      return prev;
    }, {});

    console.log(envKeys);

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "disk"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.DefinePlugin(envKeys),
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
