/*
* @Author: yangxiooping
* @Date:   2018-06-06 11:09:38
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-07 15:27:49
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
  	print: './src/print.js',
     app: './src/index.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
     contentBase: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
  	 new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
  ],
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