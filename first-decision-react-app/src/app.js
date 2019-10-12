console.log('app.js running');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>first item</li>
            <li>second item</li>
        </ol>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));