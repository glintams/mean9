class Employee{
    name:string
    id:number
    salary:number
    

    constructor(name,id,salary){
        this.name = name
        this.id = id
        this.salary = salary
        
    }

    // increment(){

    //     console.log("salary is :",this.salary+this.bonus)
        
    // }

    increment(bonus:number):number{

        this.salary += bonus
        return this.salary
        
    }

    viewdata(){

        console.log("salary :",this.salary)
    }

      
}

let obj:Employee = new Employee("Glinta",21,30000)
console.log("Name :",obj.name)
console.log("ID :",obj.id)
obj.increment(500)
obj.viewdata()
// console.log("Salary :",obj.salary)