const webpack = require("webpack");
const path = require("path");

let config = {
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}

module.exports = config;