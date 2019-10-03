import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
import PersonClass from './Person/PersonClass'

class App extends Component{
  state = {
      persons: [
        {name: 'Dilip', age: 32},
        {name: 'Scooby', age: 2},
        {name: 'Aish', age: 28}
      ]
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
        <button>Switch Name</button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is going to gym.</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <PersonClass name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );  
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a REACT App' ));
  }
}

// function App() {  
//   // return (
//   //   <div className="App">
//   //     <h1>Hi, I am a REACT App.</h1>
//   //   </div>
//   // );
//   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a REACT App' ));
// }

export default App;
