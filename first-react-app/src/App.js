import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
        <Person/>
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
