
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of the computer';
        const options = ['one', 'two', 'three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );

    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What Should I do ? </button>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll() {
        //alert('removeAll')
        console.log(this.props.options)
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAll}> removeAllOption</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {

    render() {
        return (
            <div>
                Option : {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();
        console.log("form submit")
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }   
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add New Option</button>
                </form>

            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))