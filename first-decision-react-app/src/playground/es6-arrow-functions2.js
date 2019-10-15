// arguments function is no longer bound.
const add = function (a,b) {
    console.log(arguments)
    return a + b;
}

const add1 =  (a,b) =>  {
   // console.log(arguments)
    return a + b;
}

console.log(add(1,2))
console.log(add1(1,2))

// this keyword is no longer bound

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

//user.printPlacesVisites();


const userArrow = {
    name: 'Dilip Sundarraj',
    cities: ['Eagan', 'AppleValley'],
    //printPlacesVisites: function(){
    printPlacesVisites(){
        console.log(this.name);
        console.log(this.cities)

        const newCities = this.cities.map((city) => this.name + ' lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' lived in ' + city)  // 'this' keyword is not 'bound' to this function.
        // })

        return newCities;
    }
} 

console.log(userArrow.printPlacesVisites());
