const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const apiMocker = require('mocker-api');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        before(app) {
            apiMocker(app, path.resolve('./mocker/index.js'), {
                proxy: {
                },
                changeHost: true,
            })
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};