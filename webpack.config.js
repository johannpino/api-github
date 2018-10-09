const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, '/dist') ,
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}