var Student = /** @class */ (function () {
    function Student(age, name, rollno, marks) {
        // (by default there is a constructor for class)
        this.age = age;
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        console.log("Name :", this.name);
        console.log("Age :", this.age);
        console.log("Rollno :", this.rollno);
        console.log("Marks: ", this.marks);
        return "good morning";
    };
    return Student;
}());
var obj = new Student(22, "Glinta", 2, [50, 100]); // let obj:Student = new Student()
console.log(obj.age);
console.log(obj.name);
obj.display();
// console.log(obj.display())
