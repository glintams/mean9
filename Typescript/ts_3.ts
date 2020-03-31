class Student{
    age:number                 // cannot use let or var inside class
    name:string
    rollno:number
}

let obj= new Student()

obj.age=22
obj.name="glinta"
obj.rollno= 12

console.log(obj.age)
console.log(obj.name)
console.log(obj.rollno)