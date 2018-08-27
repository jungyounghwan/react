const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        'babel-polyfill', './src/index.js'
    ],
    output: {
        path : path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: './js/App.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/App.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        port: 7777,
        historyApiFallback: true
        /*contentBase: './dist'*/
    }
};