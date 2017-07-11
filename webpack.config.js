const path = require('path')
const webpack = require("webpack")
const fs = require("fs")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "adventure.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.jspn$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'json'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ],
    target: 'node'
}