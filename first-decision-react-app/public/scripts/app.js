'use strict';

// arguments function is no longer bound.
var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

var add1 = function add1(a, b) {
    // console.log(arguments)
    return a + b;
};

console.log(add(1, 2));
console.log(add1(1, 2));

// this keyword is no longer bound

var user = {
    name: 'Dilip Sundarraj',
    cities: ['Eagan', 'AppleValley'],
    printPlacesVisites: function printPlacesVisites() {
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function (city) {
            //   console.log(this.name + ' lived in ' + city) // 'this' keyword is bound to this function.
        });
    }
};

//user.printPlacesVisites();


var userArrow = {
    name: 'Dilip Sundarraj',
    cities: ['Eagan', 'AppleValley'],
    //printPlacesVisites: function(){
    printPlacesVisites: function printPlacesVisites() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        var newCities = this.cities.map(function (city) {
            return _this.name + ' lived in ' + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' lived in ' + city)  // 'this' keyword is not 'bound' to this function.
        // })

        return newCities;
    }
};

console.log(userArrow.printPlacesVisites());
