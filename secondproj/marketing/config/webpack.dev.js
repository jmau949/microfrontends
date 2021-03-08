const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

const packageJson = require('../package.json')

const devConfig = {
    mode: 'development', 
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                // MarketingApp is used when importing in container. ie. import { mount } from 'marketing/MarketingApp'
                './MarketingApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom']
            // shortcut for webpack to do shared automatically
            shared: packageJson.dependencies
        })
    ]
}



module.exports = merge(commonConfig, devConfig);