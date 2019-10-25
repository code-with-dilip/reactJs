'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        console.log('test');
        console.log('name ', name);
        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeeting',
        value: function getGreeeting() {
            return 'Welcome ' + this.name + ' and the age is ' + this.age; //this syntax is called backtick
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student() {
        var major = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Undecided';
        var name = arguments[1];
        var age = arguments[2];

        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'getGreeeting',
        value: function getGreeeting() {
            return 'Welcome ' + this.name + ' and the age is ' + this.age + ' and the major is ' + this.major; //this syntax is called backtick
        }
    }]);

    return Student;
}(Person);

var me = new Person('Dilip Sundarraj', 32);
console.log(me.getGreeeting());
var scooby = new Person('Scooby', 2);
console.log(scooby.getGreeeting());

var aish = new Student('Science', 'Aish', '29');
console.log(aish.getGreeeting());
