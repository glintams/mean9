obj= {}
console.log(obj)
person= {"name":"Glinta","age":12,"address":"AN"}
console.log(person)
person.mobileno= 8943499559 
console.log(person)
//or
person["mobileno"]=7356471133
console.log(person)

person.update= function(name){
    person.name=name
}
console.log(person)
person.update("Anna")


student= function(rollno,name,batch){
    this.rollno=rollno
    this.name=name
    this.batch=batch
    this.display=function(){
        console.log("Rollno=",this.rollno)
        console.log("Name =",this.name)
        console.log("batch =",this.batch)
    }
}

student1= new student(1,"Amy","CSE")
student1.display()

localStorage.setItem("student1",JSON.stringify(student1))
studentstr= localStorage.getItem("student1")
studentobj= JSON.parse(studentstr)
console.log(studentobj.rollno)
console.log(studentobj["name"])


obj=Object.create(null)         // creating empty obj
console.log(obj)

student=Object.create(person)      // inheriting from person object ;and their prop will be in the prototype in console
console.log(student)
student.rollno=2
console.log(student)
console.log(student.hasOwnProperty('name'))
console.log(student.hasOwnProperty('rollno'))

person.age=10           //it not effect student
console.log(student)
console.log(person)

student.age=13
console.log(student)

student.__proto__.age=15
console.log(student)

// data=Object.freeze(person)     // freeze restrict the modification of existing or new propertys
// data.__proto__.name="Rose"
// data.number=2345
// console.log(data)
// console.log(Object.isFrozen(data))       //true means it is restricted for data
// console.log(Object.isFrozen(person))     //true means it is restricted for person

data2= Object.seal(person)               // on seal we can modify the property but cannot add 
data2.name= "Anu"
// person.number= 123456
console.log(data2)

Object.assign(student,person)
console.log(student)

for(i of Object.keys(person)){
    console.log(i)
}



Object.keys(person).forEach(element=>{        // for each functions are faster than for loop
    console.log(element)
})