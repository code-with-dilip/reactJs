const square = function (x){
    return x *x;
}

const squareArrow = (x) => {
    return x *x;
}

const squareArrow2 = (x) => x * x;

const getFirstName = (fullName) => {
   return fullName.split(' ')[0]
}

const getFirstNameShortHand = (fullName) => fullName.split(' ')[0]

 
console.log(square(2))
console.log(squareArrow(2))
console.log(squareArrow2(2))

console.log(getFirstName('Dilip Sundarraj'));
console.log(getFirstNameShortHand('Dilip Sundarraj'));