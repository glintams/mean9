var Department = /** @class */ (function () {
    function Department() {
        this.deptcode = "CSE102";
        this.name = "Cse";
        this.no_of_employees = 10;
    }
    Department.prototype.showData = function () {
        console.log("Code", this.deptcode);
        console.log("Name", this.name);
        console.log("CNo of:", this.no_of_employees);
    };
    return Department;
}());
var d = new Department();
console.log(d.name);
d.showData();
