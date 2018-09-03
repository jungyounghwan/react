const path = require('path');
const AutoPreFixer = require('autoprefixer');

module.exports = {
    entry: [
        'babel-polyfill', './src/index.js'
    ],
    output: {
        path : path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: './js/App.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(s*)css$/,
                use: [
                        {
                            loader: 'style-loader'
                        },
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
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        port: 7778,
        historyApiFallback: true,
        hot: true,
        inline: true
        /*contentBase: './dist'*/
    }
};