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
