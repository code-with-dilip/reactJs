'use strict';

console.log('app.js running');

var app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle',
    toggle: true,
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

var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    var option = app.options[random];
    alert(option);
    console.log(random);
};

var showOrHideSubtitle = function showOrHideSubtitle() {
    app.toggle = !app.toggle;
    renderIndecisionApp();
};

var numbers = [1, 2, 3];

var renderIndecisionApp = function renderIndecisionApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.toggle && React.createElement(
            'h2',
            null,
            app.subtitle
        ),
        React.createElement(
            'button',
            { onClick: showOrHideSubtitle },
            'Show Sutitle'
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options : ' + app.options : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What Should I Do ?'
        ),
        React.createElement(
            'button',
            { onClick: removeAllAOptions },
            'Remove All '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' Options is : ',
                    option
                );
            })
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
