/*
* @Author: yangxiooping
* @Date:   2018-06-06 11:09:38
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-06 18:39:03
*/
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
     contentBase: __dirname,
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
	   {
	     test: /\.(png|svg|jpg|gif)$/,
	     use: [
	       'file-loader'
	     ]
	   },
	   {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
     ]
   },
};