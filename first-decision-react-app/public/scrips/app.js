console.log('app.js running');

//var template = <p>Hello JSX</p>;

var template = React.createElement("h1", {id: "someid"},"Something new" );

ReactDOM.render(template, document.getElementById('app'));