'use strict';

console.log('app.js running');

var app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log("form submit");
    var option = e.target.elements.option.value;
    if (option) {
        console.log("option", option);
        app.options.push(option);
        renderIndecisionApp();
        e.target.elements.option.value = '';
    }
};
var removeAllAOptions = function removeAllAOptions() {
    app.options = [];
    renderIndecisionApp();
};

var renderIndecisionApp = function renderIndecisionApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAllAOptions },
            'Remove All '
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, document.getElementById('app'));
};

renderIndecisionApp();
