/*
* @Author: yangxiooping
* @Date:   2018-06-08 16:36:10
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-08 17:44:32
*/
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'study_webpack.js',
    library: 'studyWebpack',
    libraryTarget: 'umd'
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_'
      }
    }
};