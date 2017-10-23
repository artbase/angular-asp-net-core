import 'bootstrap';

import _ from 'lodash';

import './src/main/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import icon from './src/img/cat.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = icon;
  element.appendChild(myIcon);
  
  return element;
}

document.getElementById('main').appendChild(component());