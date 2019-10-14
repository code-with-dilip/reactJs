var nameVar = 'Dilip';
console.log('nameVar', nameVar)
var nameVar='Mike'
console.log('nameVar', nameVar)

let nameLet = 'jen'
console.log('nameLet', nameLet)
nameLet = 'july';
//let nameLet = 'ddd'

const nameConst = 'jen'
console.log('nameConst', nameConst)
//const nameConst = 'july';

function getPetName(){

    var petName = 'Scooby';
    return petName;
}

console.log(getPetName())
//console.log(petName);


// Block Scoping

var fullName = 'Dilip Sundarraj';

if(fullName){
var firstName = fullName.split(' ')[0]
}
console.log(firstName)