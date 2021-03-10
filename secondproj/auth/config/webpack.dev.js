const { merge } = require("webpack-merge");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const packageJson = require("../package.json");

// because auth has /auth/signup
// public path has the be changed because it references location/main
// nested routes

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        // MarketingApp is used when importing in container. ie. import { mount } from 'auth/MarketingApp'
        "./AuthApp": "./src/bootstrap",
      },
      // shared: ['react', 'react-dom']
      // shortcut for webpack to do shared automatically
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
