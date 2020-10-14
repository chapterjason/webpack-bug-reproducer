const path = require("path");
const webpack = require("webpack");

const config = {
    mode: "development",
    entry: {
        vendor: [
            "luxon",
        ],
    },
    devtool: "source-map",
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: "aa_vendor",
            path: path.join(__dirname, "dist", "manifest.json"),
        }),
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].chunk.js",
        filename: "[name].bundle.js",
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: "aa_vendor",
    },
};

module.exports = config;
