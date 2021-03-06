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

### React and React DOM

**React** - This takes for building the react components.
**ReactDOM** - This takes for rendering the react components and display it in the browser.

## React

### Set Up

- Update to latest version of node.

```
brew install node
```


### Dev Server

- Live Server is a simple server that can be used for develpment purposes.

```
yarn global add live-server
```

- Launching the server using the below code. The **index.html** file that under the **public** folder gets served in the browser.
- The below command launches the server in the port **8080**.

```
live-server public
```

### First React Element

- The below code without babel.

```
var template = React.createElement("h1", {id: "someid"},"Something new" );

ReactDOM.render(template, document.getElementById('app'));
```

### Setting up Babel

- This is a JavaScript compiler.
- In order to make babel work and convert the jsx file to a browser understandable code, you need to set **Presets** so that babel can understand.
- Installing babel globally.

```
yarn global add babel-cli@6.24.1
```

- This takes care of compiling the latest code(ES6, ES7) to the browser compatible ES5 code.
  - This is really handy when you are trying to run the latest js code in the old browsers.

- Initiate the project with yarn using the below code. This generates the file **package.json** to the root project.

```
yarn init
```

- The below dependencies are needed to compile the JSX code to a browser compatible code.

```
yarn add babel-preset-react // this takes care of reading the react related code.
yarn add babel-preset-env // this takes care of all of the ES5, 6, 7 related functionality.
```
- The above commands are going to add the below dependencies to the **package.json** file.
```
"dependencies": {
  "babel-preset-env": "^1.7.0",
  "babel-preset-react": "^6.24.1"
}
```

- **yarn.lock** -> This is an autogenerated file and it has information about the transitive dependencies and the repository from which its downloaded. No need to edit this file.

- Now its time to create a **src** directory and place the **app.js** file.
- Add the **JSX** code below
```
console.log('app.js running');

var template = <p>Hello JSX, How are you ?</p>;

ReactDOM.render(template, document.getElementById('app'));
```

- Let's run the below command. This generated the browser compatible code and places it in the **public/scripts/app.js** file.

- The **--watch** argument takes care of listening to changes and generate a browser compatible code on the fly.

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

### Exploring JSX

- You are not allowed to have multiple components adjacent to each other in JSX. So it needs to be enclosed inside **div** tag.

```
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>first item</li>
            <li>second item</li>
        </ol>
    </div>
);
```

### JSX Expressions

- Expressions gives us a way to reference a variable and use it in the app.
- We can render the variable using the following syntax - **{}**

```
const app = {
    title: 'Indecision App',
    subtitle: 'Indecision App Subtitle'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <h2>{app.subtitle}</h2>
        <ol>
            <li>first item</li>
            <li>second item</li>
        </ol>
    </div>
);

ReactDOM.render(template, document.getElementById('app'));
```

### Conditional Rendering in JSX

- If Statements
- Ternary Operators
- Logical AND operators

#### Example below covering all the conditional rendering

```
function getLocation(location){
    if(location)
        return  <p>Location is : {location}</p>
}

function renderAge(){
    return <p>Age is : {user.age}</p>
}

var templateTwo = (
    <div>
        <h1> {user.name ?  user.name : 'UnKNOWN'}</h1> // ternary operator
        {(user.age && user.age >=18) && renderAge()} // AND - &&
        {getLocation(user.location)} // if statements
    </div>
);

ReactDOM.render(templateTwo, document.getElementById('app'));
```

### Manual Data Binding

- JSX does not perform automatic data binding.
- Below example performs manual data binding by calling the **renderCountApp()** repeatedly.
- ReactDOM uses the concept of VirtualDOM to just reload the changed elements in the screen.
- The below links have more information about the **VirtualDOM** and **Reconciliation** in rendering the react elements.
  - https://reactjs.org/docs/faq-internals.html
  - https://reactjs.org/docs/reconciliation.html
**Example**

```
const addOne = () =>{
    console.log('invoked addOne');
    count++;
    renderCountApp();
}

const minusOne = () =>{
    console.log('invoked minusOne');
    count--;
    renderCountApp();
}


const reset = () =>{
    count =0
    renderCountApp();
}

const renderCountApp= () => {
    const templateTwo = (
        <div>
            <h1>Count is : {count}</h1>
            <button  onClick = {addOne}> +1 </button>
            <button  onClick = {minusOne}> -1 </button>
            <button  onClick = {reset}> Reset </button>
        </div>
    );
    ReactDOM.render(templateTwo, document.getElementById('app'));
}

renderCountApp()
```

### Form and Inputs

- All the form events falls under the category **Synthetic** events.

- JSX has its own form elements. The code example below.
  - **onSubmit** is the form handler in React to handle the **submit** and enter button **press**.

```
<form onSubmit={onFormSubmit}>
  <input type="text"  name="option"/>
  <button >Add Option</button>
</form>
```

- The implementation  of **onFormSubmit*** is below.
  - The **e** argument to the method is provided by default.

```
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit")
    const option = e.target.elements.option.value;
    if(option){
        console.log("option", option)
        app.options.push(option);
        renderIndecisionApp();
        e.target.elements.option.value = '';
    }

}
```

### Arrays in JSX

- Arrays in JSX are totally supported by JSX.
- Below example uses the **map** method to render the individual item and map them to a JSX element.

```
<ol>
  {
    app.options.map((option)=><li key={option}> Options is : {option}</li> )
  }
</ol>
```

### Toggle

- This concept is basically used to switch between the one to another using a certain event.

- Example code below.

```
const showOrHideSubtitle = () => {
    app.toggle = !app.toggle;
    renderIndecisionApp();

 }
```

- Below is the JSX code that we use to toggle between the same.

```
 {app.toggle && <h2>{app.subtitle}</h2>}
            <button onClick={showOrHideSubtitle}>Show Sutitle</button>
```

## React Components

### ES6 classes

- Classes are basically used to re-use the components.

```
babel src/playground/es6classes1.js --out-file=public/scripts/app.js --presets=env,react --watch
```

#### Example Class

- Below is an example of a ES6 Class.

```
class Person {

    constructor(name = 'Anonymous', age = 0) {
        console.log('test')
        console.log('name ', name)
        this.name = name;
        this.age = age;
    }

    getGreeeting() {
        return `Welcome ${this.name} and the age is ${this.age}`; //this syntax is called backtick
    }
}

const me = new Person('Dilip Sundarraj', 32);
console.log(me.getGreeeting());
const scooby = new Person('Scooby', 2);
console.log(scooby.getGreeeting());
```

- Template Strings : These are basically used to combine the static and dynamically fetched strings.

```
getGreeeting() {
       return `Welcome ${this.name}`; //this syntax is called template strings using backtick.
   }
```

### Creating A React Component

```
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

```
### Nesting Components

- Nesting components are pretty common in **reactjs**. Example is given below.

```
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
```

### Component Props

- **props** are equivalent to attributes in **HTML.**

**Example code below:**  

```
<Header title={title} subtitle={subtitle}/>
```
- The props are **title** and **subtitle** in the above example.

- The same can be accessed using the below code using **this.props**.

```
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
```

#### Passing props to child components

- You can pass the props from the Parent component to the child component. It is one directional.

- In this example below the **hasOptionss** is sent as props to the Action component. There is no way for the **Action** Component to update the props to the parent component.

```
 <Action hasOptions={this.state.options.length > 0} />
```

### Events and Methods

- In general its is really common to have an event and a function to handle that particular event.
- The below example shows a form and how the submit function is tied to a **function**.

```
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
                <form onSubmit={this.onFormSubmit}> // This binds the onFormSubmit method to the form.
                    <input type="text" name="option" />
                    <button>Add New Option</button>
                </form>

            </div>
        );
    }
}
```

### Method Binding

- JavaScript Functions in general does not have a **this** context. You need to bind it in order to access the bind function.  

```
const getName = obj.getName.bind(obj);
```

- The **bind()** method creates a new function that, when called, has its this keyword set to the provided value.

```
const obj = {
    name: 'Dilip',
    getName() {
        return this.name;
    }
}
//const getName = obj.getName; // errors out stating the name is undefined because its not bind to this function.
const getName = obj.getName.bind(obj);
```

#### React Method Binding

- The better option is to do it using the constructor in the class.

```
constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this); // This takes care of binding the context to this.
    }
```

### Component State

- Component state allows us to manage some data in a component. Meaning any change in the state will automatically re-render the page with the changed data.

```
babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch
```

#### Setting up Component State

```
constructor(props){
       super(props);
       this.handleAddOne = this.handleAddOne.bind(this);
       this.handleMinusOne = this.handleMinusOne.bind(this);
       this.handleReset = this.handleReset.bind(this);
       this.state ={   // state is introduced in the component.
           count : 0
       };
   }
```

#### Changing Component state

- Component state can be changed in general by using the **setState()** method.

- The **setState()** method takes in an **updater function** as an argument and returns the newly changed state.

- This **setState()** call is asynchronous.

```
this.setState((prevState)=>{
           return {
               count : prevState.count-1
           }
       });
```

#### Alternative setState function

- The alternate syntax is to pass the object itself instead of the updater function.

- This is not the recommended pattern for updating the state.
```
this.setState({
            count: 0
        })
```

- If you have multiple setState operations then it wont work as expected.
- Because the setState operations are asynchronous by default. Watch **Alternative setState Syntax** lecture in the course to understand more about it.

```
this.setState({
           count: 0
       })

this.setState({
           count: this.state.count +1
       })

```

#### Passing function references as Props

- It is pretty common to send function references from the parent component to the child component.

- This gives the flexibility of the child component to the parent component.

```

//1 - create a function
handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }

//2 - bind the function
this.handlePick = this.handlePick.bind(this);


//3- pass the function
<Action hasOptions={this.state.options.length > 0}
                   handlePick={this.handlePick} />

//4 - use the function in the child component.
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

```

#### Having a State in a child component

- It is recommended to have state in child components wherever it makes sense.

**Example Scenario**  

- Lets say you have a **form** as a child component. In that case, it makes sense to have the validations related to the form in that component itself.

- Check the AddOption component in the example.

#### State vs Props

Check the following [link](https://www.udemy.com/course/react-2nd-edition/learn/lecture/7707704#overview)

| State  | Props |
| ------------- | ------------- |
| Its an Object  | Its an Object |
| Can be used when rendering  | Can be used when rendering |
| Change in state, re-renders the page  | Change in props, re-renders the page |
| Defined in Component itself  | Data Flow in One direction, From above (Parent to Child compnents) |
| Can be changed by Component  | Cannot be changed by Component |

### Build WorkFlow
**Dependency Management** - Use npm or yarn for dependency management.
**WebPack** - This is a Bundler which takes care of bundle all the different types of files in the project in to its appropriate modules.
**Babel** - This is a compiler to compile the java script code. Basically this is needed to translate the code from modern js code to a code that can work in old and modern browsers.
**Development Server** - We need a server to run our Java Script code, so that the app can be accessed as like a real app that we connect to in production.

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
