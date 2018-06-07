/*
* @Author: yangxiooping
* @Date:   2018-06-06 11:07:38
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-07 10:27:15
*/

import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello webpack';

  element.classList.add('hello');

   var myIcon = new Image();
   myIcon.src = Icon;
   element.appendChild(myIcon);

   var btn = document.createElement('button');
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

  return element;
}

document.body.appendChild(component());