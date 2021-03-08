const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

const packageJson = require('../package.json')


const devConfig = {
    mode: 'development', 
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', 
            remotes: {
                // keys are names of different modules that we are importing in
                // key is variable
                // value = where remote entry file is for that module
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared: ['react', 'react-dom']
            // shortcut for webpack to do shared automatically
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}



module.exports = merge(commonConfig, devConfig);