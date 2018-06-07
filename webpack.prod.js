/*
* @Author: yangxiooping
* @Date:   2018-06-07 16:29:48
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-07 16:59:27
*/
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const webpack = require('webpack');

 module.exports = merge(common, {
   devtool: 'source-map',
   mode: 'production',
   plugins: [
     new UglifyJSPlugin({
       sourceMap: true
     }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     })
    ]
 });