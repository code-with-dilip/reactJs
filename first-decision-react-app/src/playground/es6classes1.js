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

class Student extends Person{

    constructor(major = 'Undecided', name, age){
        super(name, age);
        this.major = major;
    }

    getGreeeting() {
        return `Welcome ${this.name} and the age is ${this.age} and the major is ${this.major}`; //this syntax is called backtick
    }

}
const me = new Person('Dilip Sundarraj', 32);
console.log(me.getGreeeting());
const scooby = new Person('Scooby', 2);
console.log(scooby.getGreeeting());

const aish = new Student('Science','Aish', '29');
console.log(aish.getGreeeting());