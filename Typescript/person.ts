class Person{

    protected pid = 1
    name:string
    age:number
    address:string

    constructor(name,age,address){

        this.name = name
        this.age = age
        this.address = address

    }

    view(){

        console.log("Parent class")
        console.log(this.name)
        console.log(this.age)
        console.log(this.address)

    }
}

class Student extends Person{

    rollno:number
    marks:number[]

    constructor(name,age,address,rollno,marks:number[]){
        super(name,age,address)                             // for paremeterised constructor  super()  must added,
                                                            // in the case of no constructor in parent then super() is only req
                                                            // if there is constructor in parent, then super(name,age,address)   and add parent arg into child constructor also
        this.rollno = rollno
        this.marks = marks

        console.log(this.pid)                              // pid only accepts inside child class
        // console.log(super.pid)                          // cannot use super for accessing public and private variables
    }

    view(){

        console.log("Child class")
        console.log(this.pid)
        console.log(this.rollno)
        console.log(this.marks)
        
        super.view()
    }
}

// let obj:Person = new Student()           //................ also possible
let obj:Student = new Student("Helen",21,"@Home",11,[20,30,50])
obj.view()
// obj.pid                                                  // pid cannot access outside child class