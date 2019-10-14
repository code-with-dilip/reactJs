'use strict';

console.log('app.js running');

var app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options : ' + app.options : 'No Options'
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

var user = {
    name: 'Dilip',
    age: '26',
    location: 'Minneapolis'
};

function getLocation(location) {
    if (location) return React.createElement(
        'p',
        null,
        'Location is : ',
        location
    );
}

function renderAge() {
    return React.createElement(
        'p',
        null,
        'Age is : ',
        user.age
    );
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'UnKNOWN'
    ),
    user.age && user.age >= 18 && renderAge(),
    getLocation(user.location)
);

//ReactDOM.render(templateTwo, document.getElementById('app'));
ReactDOM.render(template, document.getElementById('app'));
