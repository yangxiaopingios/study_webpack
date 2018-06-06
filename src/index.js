/*
* @Author: yangxiooping
* @Date:   2018-06-06 11:07:38
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-06 14:40:47
*/

import './style.css';

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello webpack';

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());