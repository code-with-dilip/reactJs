
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            // options: ['one', 'two', 'three', 'four']
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option Already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of the computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
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
                <button onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}> What Should I do ? </button>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props) {
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
                <button onClick={this.props.handleDeleteOptions}> removeAllOption</button>
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

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: undefined
        }

    }
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const errorMessage = this.props.handleAddOption(option);
        if (errorMessage) {
            this.setState(() => {
                return {
                    error: errorMessage
                }
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add New Option</button>
                </form>

            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))