'use strict';

console.log('app.js running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'first item'
        ),
        React.createElement(
            'li',
            null,
            'second item'
        )
    )
);

ReactDOM.render(template, document.getElementById('app'));
