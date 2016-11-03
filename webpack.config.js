'use strict';

const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: __dirname + "/src/js",
    entry: {
        app: ["./app.js"],
    },
    output: {
        path: path.resolve(__dirname, "bin/js"),
        publicPath: "/js/",
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: __dirname + "/src",
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min.js',
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015"],
                }
            }],
        },{
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        } ],
    }
};
