class Student{
    age:number                 // cannot use let or var inside class
    name:string
    rollno:number
    marks:number[]

    constructor(age,name,rollno,marks){  // constructor used to initialise the object properies
                                        // (by default there is a constructor for class)
        this.age = age
        this.name = name
        this.rollno = rollno
        this.marks = marks
    }

    display():string{

        console.log("Name :",this.name)
        console.log("Age :",this.age)
        console.log("Rollno :",this.rollno)
        console.log("Marks: ",this.marks)
        
        return "good morning"

    }
}

let obj = new Student(22,"Glinta",2,[50,100])             // let obj:Student = new Student()
console.log(obj.age)
console.log(obj.name)
obj.display()
// console.log(obj.display())