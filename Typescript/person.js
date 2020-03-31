var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.pid = 1;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.view = function () {
        console.log("Parent class");
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, address, rollno, marks) {
        var _this = _super.call(this, name, age, address) // for paremeterised constructor  super()  must added,
         || this;
        // in the case of no constructor in parent then super() is only req
        // if there is constructor in parent, then super(name,age,address)   and add parent arg into child constructor also
        _this.rollno = rollno;
        _this.marks = marks;
        console.log(_this.pid); // pid only accepts inside child class
        return _this;
        // console.log(super.pid)                          // cannot use super for accessing public and private variables
    }
    Student.prototype.view = function () {
        console.log("Child class");
        console.log(this.pid);
        console.log(this.rollno);
        console.log(this.marks);
        _super.prototype.view.call(this);
    };
    return Student;
}(Person));
// let obj:Person = new Student()           //................ also possible
var obj = new Student("Helen", 21, "@Home", 11, [20, 30, 50]);
obj.view();
// obj.pid                                                  // pid cannot access outside child class
