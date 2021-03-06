const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AutoPreFixer = require('autoprefixer');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        '@babel/polyfill', './src/index.js'
    ],
    output: {
        path : path.resolve(__dirname, 'public'),
        filename: 'js/app.js'
    },
   plugins: [
        new ExtractTextPlugin({
            filename: 'css/app.css'
            /*filename: "css/[name].css",
            allChunks: true*/
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
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [AutoPreFixer]
                            },
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    node: { fs: 'empty' },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        port: 7777,
        historyApiFallback: true,
        hot: true,
        inline: true,
         contentBase: './' ,
         publicPath : '/public/'
    }
};