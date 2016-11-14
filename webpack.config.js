"use strict";

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        publicPath: "/",
        filename: "main.min.js"
    },
    resolve: {
        extensions: [".json", ".js"]
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.js$/, include: [path.resolve(__dirname, "./src")], loader: "babel-loader" },
            { test: /\.json/, loader: "json-loader" },
            { test: /\.svg/, loader: "svg-url-loader" },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: "file-loader?name=[name].[ext]" },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader!postcss-loader",
                    publicPath: ""
                })
            }]
    },
    devtool: "#eval-source-map",
    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: {
                postcss: [
                    require("postcss-cssnext")(),
                    require("stylelint"),
                    require("postcss-reporter")
                ]
            }
        }),
        new ExtractTextPlugin("bi.min.css"),
        new CopyWebpackPlugin([
            { from: __dirname + "/src/index.html" },
            { from: __dirname + "/src/policy.html" },
            { from: __dirname + "/src/img/bi.png", to: __dirname + "/public/img/bi.png" },
            {
                from: __dirname + "/src/pJTm63-FLBNR0ABO9Qdp4KaqbZbsyF_iw42oWTWZLnA",
                to: __dirname + "/public/.well-known/acme-challenge/pJTm63-FLBNR0ABO9Qdp4KaqbZbsyF_iw42oWTWZLnA/index.html"
            }
        ])
    ]
};

if (process.env.NODE_ENV === "production") {
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new UnminifiedWebpackPlugin()
    ]);
}
