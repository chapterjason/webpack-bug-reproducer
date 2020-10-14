const path = require("path");
const webpack = require("webpack");

const config = {
    mode: "development",
    entry: {
        customer: "./index.js"
    },
    devtool: "source-map",
    ...(require("aa-config/base")(__dirname)),
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].chunk.js",
        filename: "[name].bundle.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: "aa_consumer",
    },
};

module.exports = config;
