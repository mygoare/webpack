var env = process.env.NODE_ENV;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        sourceMapFileName: "[file].map",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.scss$/, loaders: ['style', 'css?modules&localIdentName='+(env === 'production' ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'), 'sass'] },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                }
            },

            {
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/font-woff"
            }, 
            {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: "file"
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new CopyWebpackPlugin([
            {from: './test.html'}
        ])
        // new webpack.optimize.UglifyJsPlugin({compress:{warnings: false}})
    ],
    devtool: "#source-map",
    devServer: {
        contentBase: './dist'
    }
};
