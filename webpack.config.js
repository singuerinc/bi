"use strict";

const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    context: __dirname + "/src/js",
    entry: {
        app: ["./app.js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "js/[name].bundle.js"
    },
    // devtool: "#sourcemaps",
    devServer: {
        contentBase: __dirname + "/src"
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.min.js"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: __dirname + "/src/index.html" }
        ])
    ]
};
