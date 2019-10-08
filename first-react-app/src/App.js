import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import PersonClass from './Person/PersonClass'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Dilip', age: 32 },
      { id: 2, name: 'Scooby', age: 2 },
      { id: 3, name: 'Aish', age: 28 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('clicked')
    //Dont DO this this.state.persons[0].name = 'Dilip Sundarraj'
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Scooby', age: 2 },
        { name: 'Aish', age: 28 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    const person = {
      ...this.state.persons[personIndex] // This is the latest and this is called spread operator approach.
    };
    //const person = Object.assign({}, this.state.persons[personIndex]) alternative syntax to create a copy of the object.
    person.name = event.target.value;
    const persons = [...this.state.persons] // creating a copy of the persons array
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const showPersonConst = this.state.showPersons
    this.setState({
      showPersons: !showPersonConst
    })
  }

  deletePersonHandler = (index) => {
    //const personsConst = this.state.persons.slice();
    const personsConst = [...this.state.persons];
    personsConst.splice(index, 1);
    this.setState({ persons: personsConst });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(person.id)}
                changed={(event) => this.nameChangedHandler(event, person.id)} // passing the event and person id
              />
            })
          }
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
        <button
          style={style}
          // onClick={this.switchNameHandler.bind(this, 'Dilip Sundarraj')}>Switch Name</button>
          //onClick={this.switchNameHandler.bind(this, 'Dilip Sundarraj')}>Switch Name</button>
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        {/* /* <PersonClass name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}

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
