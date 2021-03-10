const { merge } = require("webpack-merge");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const packageJson = require("../package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// because dashboard has /dashboard/signup
// public path has the be changed because it references location/main
// nested routes

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
      index: "index.html",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        // MarketingApp is used when importing in container. ie. import { mount } from 'dashboard/MarketingApp'
        "./DashboardApp": "./src/bootstrap",
      },
      // shared: ['react', 'react-dom']
      // shortcut for webpack to do shared automatically
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
