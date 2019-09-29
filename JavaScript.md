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
