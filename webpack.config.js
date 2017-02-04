"use strict";

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
    entry: {
        app: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        publicPath: "",
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
            { test: /\.(png|jpg|jpeg|gif)$/, loader: "file-loader?name=[name]-[hash:6].[ext]" },
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
                    require("postcss-cssnext")()
                ]
            }
        }),
        new ExtractTextPlugin(isProduction ? "bi-[hash:6].min.css" : "bi.min.css"),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "/src/policy.html") },
            { from: path.join(__dirname, "/src/img/bi.png"), to: path.join(__dirname, "/public/img/bi.png") },
            {
                from: path.join(__dirname, "/src/LEPmqX81a_-ucMwRmujY_gM8ZfXp6h5PnhNQ59NG1LA"),
                to: path.join(__dirname, "/public/.well-known/acme-challenge/LEPmqX81a_-ucMwRmujY_gM8ZfXp6h5PnhNQ59NG1LA/index.html")
            }
        ])
    ]
};

if (process.env.NODE_ENV === "production") {
    module.exports.output.filename = "main-[hash:6].min.js";
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
