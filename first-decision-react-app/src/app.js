class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );

    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of the computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What Should I do ? </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option/>
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component {

    render(){
        return (
            <div>
                <p> Option Component</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add New Option</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))