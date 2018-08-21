const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        'babel-polyfill', './src/index.js'
    ],
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./public/css/App.css"
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
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                   }
                ]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        publicPath: '/',
        filename: './public/js/bundle.js'
    },
    devServer: {
        port: 7777,
        historyApiFallback: true
        /*contentBase: './dist'*/
    }
};