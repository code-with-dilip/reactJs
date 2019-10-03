import React, {Component} from 'react';

class PersonClass extends Component {
    render(){
        return (
            <p> My Name is {this.props.name} and my age is {this.props.age} years old!</p>
        );
    }
}

export default PersonClass