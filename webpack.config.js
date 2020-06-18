const path = require('path');

module.exports = {
    mode:'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: "babel-loader"
            }
        ]
    },
    target: "node"
};
