const path = require('path');
const webpack = require('webpack');
let merge = require('webpack-merge');

let ROOT_PATH = process.cwd();

let config = require('./webpack.base.config');

const CleanWebpackPlugin = require('clean-webpack-plugin');


config = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(ROOT_PATH, 'bin'),
        filename: 'entry/[name].[hash].js',
        chunkFilename: "modules/[id].[hash].js",
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(['bin'], ROOT_PATH),
    ]
});


module.exports = config;