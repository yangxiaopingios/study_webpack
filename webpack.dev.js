/*
* @Author: yangxiooping
* @Date:   2018-06-07 16:29:19
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-07 16:29:28
*/
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   }
 });