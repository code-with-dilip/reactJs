# ReactJs

## What is SPA ?
- There are three different types of applications in general
  - Static WebSites
  - Dynamic WebSites
  - SPA

### Static WebSites
- In a traditional system, when the browser talks to an URL the whole web page is send to the browser from the back end. The content is stored as an HTML in the server. This reloads the whole screen to reload the content.
### Dynamic WebSites
- In a traditional system, when the browser talks to an URL the whole web page is send to the browser from the back end. The HTML content is generated in the server dynamically. This reloads the whole screen to reload the content.

- In a nutshell, the HTML code is completly built on the server.
- The problem with both the approach is that it is really difficult to build a modern website using the above mentioned style of building websites.

### SPA
- The idea is inspired from Mobile Apps.
- SPA have a sevrer and a client. It just has one HTML file loaded with bunch of JS content loaded and started.As we all know JS runs on a browser.
-  So the idea is the JS code takes care of fetching the data and build the DOM in the browser. So, No server calls in here to reload the HTML.
- Basically no request is sent to the backend to load the retrieve the HTML.

### Why React?
- UI state becomes too difficult handle. Reacts helps taking care of the state of the application.
- React is backed by a Huge community and its pretty easy to find a solution to a problem.

### Single Page vs Multi Page Apps

| SPA  | MPA |
| ------------- | ------------- |
| Only one HTML Page, Content is rendered on client. After that everything is managed with **React**. | Multiple HTML Page and the content is rendered from Server. |
| Page is displayed as multiple Components and its managed by a framework like **React** | It can be displayed as components. But its a combination of individual HTML pages , css and etc. We can have react components to be part of it as widgets |
| Page is displayed as multiple Components and its managed by a framework like **React** | It can be displayed as components. But it's a combination of individual HTML pages , css and etc. We can have react components to be part of it as widgets |
| ReactDOM.render() call to rerender the page. Typical there is only one parent React Component is available.  | If React is included in MPA, then multiple ReactDOM.render() call for each component|

## Java Script Basics

- Click on the link below for JavaScript basics.

[Java Script Basics](https://github.com/code-with-dilip/reactJs/blob/master/JavaScript.md)

### Dev Server

- Live Server is a simple server that can be used for develpment purposes.

```
yarn global add live-server
```

### Babel

- This is a JavaScript compiler.
- This takes care of compiling the latest code(ES6, ES7) to the browser compatible ES5 code.
  - This is really handy when you are trying to run the latest code in the old browsers.

### Build WorkFlow
**Dependency Management** - Use npm or yarn for dependency management.
**WebPack** - This is a Bundler which takes care of bundle all the different types of files in the project in to its appropriate modules.
**Babel** - This is a compiler to compile the java script code. Basically this is needed to translate the code from modern js code to a code that can work in old and modern browsers.
**Development Server** - We need a server to run our Java Script code, so that the app can be accessed as like a real app that we connect to in production.


### React and React DOM

**React** - This takes for building the react components.
**ReactDOM** - This takes for rendering the react components and display it in the browser.

## React

### Set Up

- Update to latest version of node.

```
brew install node
```

- Run the below command to set up the **create-react-app** globally

```
sudo install create-react-app -g
```

- Lets create the first react app by running the below command. This creates a base project named **first-react-app** with the necessary directories and start up scripts that are needed to build the react app.

```
create-react-app first-react-app
```

-  Adding a new package to the project. The below command adds the radium dependency in to the project and then it adds it to the **package.json** file.

```
npm install --save radium
```

### Exploring the Package Structure of a react-app

- **package.json** - This has all the dependencies that are required for the react project.
- **node-modules** - This is the directory which was created automatically and it holds all the dependencies that are needed by the project.
- **public** - This folder which get served by the webserver.
- **index.html** - This is the only html file thats present in the whole react app with the div id **root**. The whole react app is mounted in to this div tag.
- **App.js** - This is the file which holds the react code.
- **index.js** - This is the file which renders the react component and mounts it in to the div tag **root**.

- This the key command that takes care of applying the **App** react component to the div tag with the name **root** which is present in the index.html.

```
ReactDOM.render(<App />, document.getElementById('root'));
```

#### Sample React Component

**Approach 1**
- **render()** method is mandatory, because will call this method to render something to the screen.
- The content thats inside the render() method is a **jsx** code.
- Creating components using the class gives you the option to define a state.

```
import React, {Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
      </div>
    );
  }
}

export default App;
```
**Approach 2**
- This is a function based component. Use this when you feel like there is not going to be a any state in the component.

```
function App() {
  return (
    <div className="App">
      <h1>Hi, I am a REACT App.</h1>
    </div>
  );
}

export default App;
```

### Understanding JSX

- JSX is a syntax extension to Java Script. JSX code will only be written inside a **js** code.
- JSX produces react elements.
- JSX helps to couple the mark up and logic together.
- Whatever that's written inside the react Component is a JSX code
- Both the approaches are the same. It's just that **approach1** is more readable than **approach2**.

**Approach 1**

```
class App extends Component{
  render(){
    return (
       <div className="App">
         <h1>Hi, I am a REACT App.</h1>
       </div>
     );
  }
}

```
**Approach 2**

```
class App extends Component{

  render(){
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a REACT App' ));
  }
}

```

### JSX Restriction

**Restriction 1**
- In the **div** below we have provided the **className**.
- In the regular HTML code we would have used **class**, but the class here is reserved for HTML and thats why we had to use **className**.

```
<div className="App">
        <h1>Hi, I am a REACT App.</h1>
</div>
```
**Restriction 2**  
- You are only allowed to have one parent element inside the **render()** method.
- In this example you can just have **div** as a parent element.

```
return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
      </div>
    );
```        

### Creating a Functional Component and Resuing them

- Below is a simple **react** component which just returns a paragraph.
- The **import** and **export default** are really important.
  - **import** allows you to import the React features to this file.
  - **export** will allow the other components to start using this.

#### Person Functional Component

```
import React from 'react';

const person = () => {

    return (
        <p> I am a Person</p>
    );
}

export default person;
```
#### Using the Person Functional Component in App.js

- The <Person/> component in the below code allows you to use the component inside another component.

```
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
```

### Dynamic content in react

- Using the **{}** we can generate the dynamic content in to the jsx file.

### Introducing props for injecting Dynamic Content
- **props** - This is the property through which the dynamic content is injected.

```
<Person name='Dilip' age='32'/> // names and age are the property which are injected in to the component.
```
- Using props we can read those properties

- **Approach1**
```
import React from 'react';

const person = (props) => {
    return (
        <p> My Name is {props.name} and my age is {props.age} years old!</p>
    );
}

export default person;
```  
- **Approach2**

```
import React, {Component} from 'react';

class PersonClass extends Component {
    render(){
        return (
            <p> My Name is {this.props.name} and my age is {this.props.age} years old!</p>
        );
    }
}

export default PersonClass
```

### Accessing the Children property

- Anything thats between the React Component's opening and closing tag is a children.
- In here, **My Hobbies are going to gym** is a children.

```
<Person name='Dilip' age='32'>My hobby is going to gym.</Person>

```
- We can access the content inside the React component using the **children** props.

```
<p>{props.children}</p>
```

### Introducing state in React Components

- **state** can only be used in the class based React components.
- The beauty of using state is that it renders the component again when there is a change in **state**.
- Defining a **state** in the react component.

```
state = {
      persons: [
        {name: 'Dilip', age: 32},
        {name: 'Scooby', age: 2},
        {name: 'Aish', age: 28}
      ]
  }
```

- Accessing the state by using the this **keyword**.

```
<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby is going to gym.</Person>
```

### Manipulating state in React Components

- You can only manipulate the state using the **setState()** function call. This renders the page again.
- Normally we will define a handler like below through which the state can be managed by using **this.setState()** method

```
switchNameHandler= () =>{
   // console.log('clicked')
   //Dont DO this this.state.persons[0].name = 'Dilip Sundarraj'
    this.setState({persons: [
      {name: 'DilipSundarraj', age: 32},
      {name: 'Scooby', age: 2},
      {name: 'Aish', age: 28}
    ]})
  }
```

- How to invoke the **switchNameHandler**?
- We normally provide the reference of the handler like below using the this keyword.
```
<button onClick={this.switchNameHandler}>Switch Name</button>
```

- The only two ways to render the page by changing the **state** and **props**.
- The code before **reacthook**
```
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

  switchNameHandler= () =>{
   // console.log('clicked')
   //Dont DO this this.state.persons[0].name = 'Dilip Sundarraj'
   this.setState({persons: [
    {name: 'DilipSundarraj', age: 32},
    {name: 'Scooby', age: 2},
    {name: 'Aish', age: 28}
  ]})
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I am a REACT App.</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>

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

```

### useState() Hook for State Management
- The class based component is replaced with the function based component. We are using **useState  reactHook** for state management in a react component.

```
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
  }); // this returns an array of two elements.first element is the currentState and setPeronState can be used for setting the new state.1

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
```
- Exploring **useState** reactHook.
- **useState** returns an array of two elements.
  - first element is the currentState which is the **personState** in the below example.
  - **setPeronState** can be used for setting the new state

```
const App = (props) => {
  const [personState, setPersonState]  = useState({
    persons: [
      {name: 'Dilip', age: 32},
      {name: 'Scooby', age: 2},
      {name: 'Aish', age: 28}
    ]
  }); // this returns an array of two elements.first element is the currentState and setPeronState can be used for setting the new state.1

const switchNameHandler= () =>{
    setPersonState({persons: [
      {name: 'DilipSundarraj', age: 32},
      {name: 'Scooby', age: 2},
      {name: 'Aish', age: 28}
    ]})
  } // This replaced the whole state. If your state of this component has more than person then it replaces it.
```

### Stateless v StateFul Components

#### StateFul Component:

- Any component that has manages a state then these are called stateful component.
  - Using the **state** object in the class or
  - Using the **useState** in the react hooks.
- These are also called smart component or container component.

#### Stateless Component
- Any component that does not maintain a state is called stateless component.
- It is recommended to create as many as stateless component.

### Passing Method References Between Components

- In the below example **click** prop is passed with the reference of the function. The name of the prop **click** can be anything.

```
<Person name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler}>My hobby is going to gym.</Person>
```

- The same **click** prop can be accessed in the child component using the **props** as like you access any other props.

```
<p onClick={props.click}> My Name is {props.name} and my age is {props.age} years old!</p>
```

#### bind

- **bind** is needed in order to bind a function to a class. If you use arrow functions then the function are automatically bound to the component.

- We dont need to bind this as its automatically bound to the class by **React**.

```
switchNameHandler=() =>{
 // console.log('clicked')
 //Dont DO this this.state.persons[0].name = 'Dilip Sundarraj'
 this.setState({persons: [
  {name: newName, age: 32},
  {name: 'Scooby', age: 2},
  {name: 'Aish', age: 28}
]})
}

```
- If you have to pass a value to the function using **this** then its mandatory to bind the function using the below syntax.

**Syntax 1**  

```
<button onClick={this.switchNameHandler.bind(this, 'Dilip Sundarraj')}>Switch Name</button>
```
**Syntax 2**  
- This is not a recommended syntax to use.

- This syntax may re-render the content too often and this syntax is not efficient.

```
<Person name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={()=>this.switchNameHandler('Dilip!')}>My hobby is going to gym.</Person>
```

### Two Way Binding

- Lets explore the two way binding using an example.
- The below reads the event and updates the value of the field

```
nameChangedHandler = (event) => {
   this.setState({persons: [
     {name: 'Dilip', age: 32},
     {name: event.target.value, age: 2},
     {name: 'Aish', age: 28}
   ]})
 }

//This takes care of passing the reference of this function to the other component.

 <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
         changed={this.nameChangedHandler}/>

```
- Here in this file we have the two way binding set up using the input element.
- **onChange** event takes care of invoking the above function and target value is set using the **event.target.value**.
- The **value** attribute takes care of setting the default value when the component was loaded in the text box.

```
<input type="text" onChange={props.changed} value={props.name}></input>
```

### Adding Styles to the React Component

- Create a new file with the name **Person.css**.

```
.Person {
    width: 30%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center
}
```

- Import the **css** file in to the React component by adding the **className** attribute to the **div**.

```
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> My Name is {props.name} and my age is {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}
```

#### Inline styling

- There is a **style** attribute that can used against a react Component.
```
const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border : '1px solid blue',
     padding: '8px',
     cursor: 'pointer'
 };

 <button
       style = {style}
       onClick={this.switchNameHandler.bind(this, 'Dilip Sundarraj')}>Switch Name</button>
```

## Working With Lists and Conditional Rendering (Chapter 4)
- Conditionally render the elements in the page using a flag.
- We can use the map function to iterate the list and populate the JSX elements dynamically.

```
persons = (
      <div>
        {
          this.state.persons.map((person, index) => {
            return <Person
              key={index}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(person.id)}
            />
          })
        }
```

- Removing an element from the array using the **splice()** method in Java Script
- Never edit the **state** properties directly.

```
deletePersonHandler = (index) => {
    //const personsConst = this.state.persons.slice();//cloning the object - - approach1
    const personsConst = [...this.state.persons]; //cloning the object - approach2
    personsConst.splice(index, 1);
    this.setState({ persons: personsConst });
  }
```
- Flexible Lists. Dynamically adding the onChange event to the React Components.

```
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
```

## Styling React Components(Chapter-5)

### Inline Styling

- This is called inline styling where the CSS code is done using JSX and dynamically added to the element.

```
const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
```

- The above code has come limitations like it cannot apply the pseudo selectors to an element like **hover** and **media queries**.

- This style is injected to the bind variable like below.

```
<button
  style={style}
  onClick={this.togglePersonHandler}>Toggle Persons</button>
{persons}
</div>
```

### Radium

- Radium is one the popular inline style library for **React**.
- The package can be installed by running the below code.

```
npm install --save radium
```
- We were able to apply the **hover** which is a pseudo selector in to the file using inline style.

#### Pseudo Selector

```
':hover': {
        backgroundColor : 'lightgreen',
        color: 'black'
      }
```
- We can override the same by using the below syntax.

```
style[':hover'] =  {
       backgroundColor : 'salmon',
       color: 'black'
     }
```

#### Media Queries
- Using Radium for Media Queries
  -  Media queries are basically used to applu different styles for different types of devices.(Desktop, Mobile, Tab)

```
const style = {
      '@media(min-width:500px)':{
          width: '450px'
      }
  }
```
- The style below overrides the className
```
<div className="Person" style={style}>
```

- We need to wrap the whole parent component with **StyleRoot** like below code.

```
import Radium, {StyleRoot} from 'radium'
<StyleRoot>
     <div className="App">
       <h1>Hi, I am a REACT App.</h1>
       <p className={classes.join(' ')}> This is really working</p>
       <button
         style={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
       {persons}
     </div>
</StyleRoot>
```

#### Using CSS for styling
- The below command takes care of pulling the scripts folder from node_modules and put it in to the classpath.

```
npm run eject
```
