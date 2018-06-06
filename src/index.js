/*
* @Author: yangxiooping
* @Date:   2018-06-06 11:07:38
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-06 11:08:36
*/

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello webpack';

  return element;
}

document.body.appendChild(component());