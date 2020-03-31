var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    // increment(){
    //     console.log("salary is :",this.salary+this.bonus)
    // }
    Employee.prototype.increment = function (bonus) {
        this.salary += bonus;
        return this.salary;
    };
    Employee.prototype.viewdata = function () {
        console.log("salary :", this.salary);
    };
    return Employee;
}());
var obj = new Employee("Glinta", 21, 30000);
console.log("Name :", obj.name);
console.log("ID :", obj.id);
obj.increment(500);
obj.viewdata();
// console.log("Salary :",obj.salary)
