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
            { from: __dirname + "/src/index.html" },
            { from: __dirname + "/src/css/main.css", to: __dirname + "/public/css/main.css" },
            { from: __dirname + "/src/policy.html" },
            { from: __dirname + "/src/pJTm63-FLBNR0ABO9Qdp4KaqbZbsyF_iw42oWTWZLnA", to: __dirname + "/public/.well-known/acme-challenge/pJTm63-FLBNR0ABO9Qdp4KaqbZbsyF_iw42oWTWZLnA" },
        ])
    ]
};
