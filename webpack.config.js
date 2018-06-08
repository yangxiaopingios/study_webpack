/*
* @Author: yangxiooping
* @Date:   2018-06-08 18:37:22
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-08 18:37:30
*/
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.js'
   },
    module: {
      rules: [
          {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              use: 'babel-loader'
          }
      ]
  },
};