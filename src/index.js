/*
* @Author: yangxiooping
* @Date:   2018-06-08 16:35:26
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-08 16:35:43
*/
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
};

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
};