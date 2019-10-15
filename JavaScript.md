# Advanced Java Script

## let and const

-  **let** and **const** are function scoped just like **var**.
-  **let** and **const** are block scoped, but **var** is not. Check the example below.

```
var fullName = 'Dilip Sundarraj';

if(fullName){
var firstName = fullName.split(' ')[0]
}
console.log(firstName) // firstName is still accessed outside the if block. This is not available for let and const.
```

### Babel Command

```
babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
```

### Problems with var

- Example is available in this file **es6-let-const.js** in the **FIRST-DECISION-REACT-APP**.
- **var** allows you to recreate and reassign variables. This is a problem as mutating a variable can cause lot of issues.

```
var nameVar = 'Dilip';
console.log('nameVar', nameVar)
var nameVar='Mike' // recreating and re-assign is allowed
console.log('nameVar', nameVar)
```
### var vs let

| var  | let |
| ------------- | ------------- |
| Redeclaring the same variable is allowed | Redeclaring the same variable is not allowed |
| Reassigning the same variable is allowed | Reassigning the same variable is not allowed |


| let  | const |
| ------------- | ------------- |
| Use it for variable values | use it for constant values |
| New values can be re-assigned | never gets a new value once initialized|

**let Example**
```
let myName='dilip';
console.log(myName);
myName='scooBy'; // reassigning the variable is allowed
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
- All arrow functions are anonymous.

- Babel Command to test the changes.

```
babel src/playground/es6-arrow-functions.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/es6-arrow-functions2.js --out-file=public/scripts/app.js --presets=env,react --watch\
```


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

- The arguments object is no longer bound with arrow functions. Check the example below.

```
const add = function (a,b) {
    console.log(arguments); // regular functions have access to the argument
    return a + b;
}

const add1 =  (a,b) =>  {
    console.log(arguments) // no longer valid in arrow functions.
    return a + b;
}

```

- The **this** keyword is no longer bound

**Regular Function Example**  

```
const user = {
    name: 'Dilip Sundarraj',
    cities: ['Eagan', 'AppleValley'],
    printPlacesVisites: function(){
        console.log(this.name);
        console.log(this.cities)
        this.cities.forEach(function(city){
         //   console.log(this.name + ' lived in ' + city) // 'this' keyword is bound to this function.
        })
    }
};
```

**Arrow Function Example**  

```
const userArrow = {
    name: 'Dilip Sundarraj',
    cities: ['Eagan', 'AppleValley'],
    //printPlacesVisites: function(){
    printPlacesVisites(){ // This syntax is also supported
        console.log(this.name);
        console.log(this.cities)

        const newCities = this.cities.map((city) => this.name + ' lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' lived in ' + city)  // 'this' keyword is not 'bound' to this function.
        // })

        return newCities;
    }
}
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

## Destructuring

- In this section we will learn about the techniques to read the elements from the array and object using simple syntax.

**Example**

```
const characters = ['a','b','c'];
[char1, char2] = characters // This syntax takes care of reading the 1st and 2nd element in the array.
console.log(char1,char2);

[char1, ,char3] = characters // [char1, ,char3] = characters // This syntax takes care of reading the 1st and 3rd element in the array.
console.log(char1,char3);
```

## Reference and Primitive Types

### Primitive Types

- In, String and boolean are primitive types.

```
const num = 1; //

const num1 = num; // This copies the value of the num to num1. No reference created.
```

### Reference Type

**Example**

- There are two approaches to that
  - Copying the references.
  ```
  const person1 = person;
  ```
  - Copying the object using the Spread operator.
  ```
  const person2 = {...person};
  ```

```
const person = {name: "Dilip"};
const person1 = person; // person1 still referencing to the person.
const person2 = {...person}; //Copying the object using the Spread operator.This is a deep copy
person.name= "Scooby";
console.log(person1);
console.log(person2);
```

## Array Functions

- map -> This function is used to map a value to a new value.
```
const numbers = [1,2,3]

const doubleArray = numbers.map((num)=>{
    return num*2
});
console.log(doubleArray);
```

## Creating an Object Copy

- The spread operator syntax is the modern way of creating the copy of an object.

```
const persons = [...this.state.persons]
```

- The syntax below takes care of creating a copy of the object.

```
const person = Object.assign({}, this.state.persons[personIndex])
```
