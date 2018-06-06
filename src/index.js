/*
* @Author: yangxiooping
* @Date:   2018-06-06 11:07:38
* @Last Modified by:   yangxiooping
* @Last Modified time: 2018-06-06 18:14:30
*/

import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Hello webpack';

  element.classList.add('hello');

   var myIcon = new Image();
   console.log(Icon);
   myIcon.src = Icon;
   element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());