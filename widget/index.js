import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';

window.components = [];
var elems = document.getElementsByClassName('component-schema');
Object.keys(elems).forEach(function(k) {
  var e = elems[k],
    s = e.innerText.replace(/(“|”)/g, '"').replace(/\n/g, ''),
    c = e.getElementsByClassName('component')[0];
  window.components.push({ schema: s, component: c });
  e.getElementsByClassName('schema')[0].innerText = '';
});

window.components.forEach(item => ReactDOM.render(
  <App schema={JSON.parse(item.schema)}/>, item.component));
