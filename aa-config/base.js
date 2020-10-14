const path = require("path");
const webpack = require("webpack");

/**
 * @param {string} directory
 */
module.exports = function (directory) {
    // workaround:
    // const webpack = require(path.resolve(directory, "node_modules/webpack"));

    return {
        plugins: [
            new webpack.DllReferencePlugin({
                context: directory,
                sourceType: "umd",
                manifest: path.resolve(directory, "node_modules/aa-vendor/dist/manifest.json"),
            }),
        ],
    };
};
