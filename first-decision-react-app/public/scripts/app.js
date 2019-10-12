'use strict';

console.log('app.js running');

var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);

ReactDOM.render(template, document.getElementById('app'));
