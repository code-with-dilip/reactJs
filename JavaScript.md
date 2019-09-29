# Advanced Java Script

## let and const

| let  | const |
| ------------- | ------------- |
| Use it for variable values | use it for constant values |
| New values can be re-assigned | never gets a new value once initialized|

**let Example**
```
let myName='dilip';
console.log(myName);
myName='scooBy';
console.log(myName);
```
**const Example**

```
const myName='dilip';
console.log(myName);

myName='scooBy'; // "TypeError: Assignment to constant variable.
console.log(myName);
```

## Arrow Functions

- This are the modern way of creating a function and assigning it to a variable.

#### Syntax

```
const myFunc = () => {

}
```

#### Example

```
function printMyName(name){
  console.log(name);
}

const printMyName1 = (name) => {
  console.log(name);
}

const printMyName2 = name => {
  console.log(name);
}

const printMyName3 = (name,age) => {
  console.log(name,age);
}
printMyName('Dilip');
printMyName1('Dilip');
printMyName2('Dilip');
```

**Function with Return values**

```
const multiply = (num1,num2) => {
  return num1 * num2;
}

// the below code has the short syntax
const multiplySimplified = (num1,num2) =>  num1 * num2;

console.log(multiply(2,3));
console.log(multiplySimplified(2,3));
```

## Exports and Imports

- In general, JavaScript code is split in to multiple files as modules. The general idea behind modules is that you can import the content in one js file from other file.

- Now we have two java script files **person.js** and **utility.js**.

**person.js**
```
const person = {
  name= 'Dilip'
}
export default person
```
**utility.js**
```
export const employee = {
  name= 'Dilip'
}
export const user = {
  name= 'Dilip'
}
```

- If **app.js** file would like to import the functions defined in the above files. Below are the ways to do it

**app.js**
```
// default functions can be imported using any different names.
import person from './person.js'
import prs from './person.js'

//Name should match and it should be between curly braces as they are not within the curly braces.
import {employee} from './utility.js'
import {user} from './utility.js'

//import using alias
import {user as usr} from './utility.js'

//import as bundled- This imports all the exports as js properties. You can access this like bundled.user and bundled.employee
import * as bundled from './utility.js'
```

## Classes
- Classes are used to introduce the object oriented principles in JavaScript.

**ES6 approach**
```
class User{

  constructor() {
    this.name = 'Dilip';
  }

  printMyName() {
    console.log(this.name);
  }
}

class SuperUser extends User{ //Inheritance is allowed

  constructor(){
    super();
    this.role='Engineer';
    this.name='Scooby'; // overriding properties are allowed
  }
   printRole() {
    console.log(this.role);
  }
}

const user = new User();
user.printMyName();

const superUser = new SuperUser();
superUser.printMyName();
superUser.printRole();
```

**ES7**
- Below is the code that we write using the ES7. You don't need **constructor** and **this** keyword.
```
class User{
  name = 'Dilip';
  printMyName = () => {
    console.log(this.name);
  }

}

class SuperUser extends User{
  role='Engineer';
  name='Scooby'; // overriding properties are allowed
   printRole = () => {
    console.log(this.role);
  }
}

const user = new User();
user.printMyName();

const superUser = new SuperUser();
superUser.printMyName();
superUser.printRole();
```

## Spread and Rest Operator

**Syntax**

```
...
```
**Spread**  

- The spread operator is used to split up array elements or object properties

```
const newArray=[...oldArray, 1,3] // This adds 1 and 3 to the oldArray and returns a new array.
const newObject= [...oldObject, newProp:5] // This adds the newProd to the oldObject.If an prop "newProp" is available then it will be overriden.
```

**Example**

```
//array manipulation
const numbers =[1,2,3]
const newNumbers =[...numbers,4,5,6]
console.log(newNumbers)

//object manipulation
const user={
  name: 'Dilip'
};
const userExtended = {
  ...user,
  age: 32
};
console.log(userExtended);
```

**Rest**  

- The Rest operator is used in the scope of function arguments. This is used to merge the list of function arguments in to the array.

```
function hello(...args){

returns args.sort()
}
```

**Example**

```
const sortFunction = (...args) => args.sort();
console.log(sortFunction(4,3,6,7,2,1));
```
