const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        './src/index.js'
    ],
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
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
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '/**/*.css',
                            sourceMap: true
                        }
                    },
                    "css-loader"
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