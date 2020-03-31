class Department{

    private deptcode:string = "CSE102"
    name = "Cse"
    protected no_of_employees:number = 10

    showData(){
        console.log("Code :", this.deptcode)
        console.log("Name :", this.name)
        console.log("CNo of:", this.no_of_employees)
    }
}

let d= new Department()
console.log(d.name)
d.showData()
// d.deptcode             //not possible