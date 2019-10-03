import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'
import PersonClass from './Person/PersonClass'

const App = (props) => {
  const [personState, setPersonState]  = useState({
    persons: [
      {name: 'Dilip', age: 32},
      {name: 'Scooby', age: 2},
      {name: 'Aish', age: 28}
    ]
  });

  const switchNameHandler= () =>{
    // console.log('clicked')
    //Dont DO this personState.persons[0].name = 'Dilip Sundarraj'
    setPersonState({persons: [
      {name: 'DilipSundarraj', age: 32},
      {name: 'Scooby', age: 2},
      {name: 'Aish', age: 28}
    ]})
  }

    return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My hobby is going to gym.</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
        <PersonClass name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );  
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a REACT App' ));
}

export default App;

// function App() {  
//   // return (
//   //   <div className="App">
//   //     <h1>Hi, I am a REACT App.</h1>
//   //   </div>
//   // );
//   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a REACT App' ));
// }


