function Student(rollno,name,age,marks){
    this.Rollno= rollno
    this.Name= name
    this.Age= age  // without 'this' it shows undefined in console printing
    this.marks=marks

    this.details=function(){
        console.log("Roll No",this.Rollno)
        console.log("Name",this.Name)
        console.log("Age",this.Age)
    }

    this.average= function(){
        sum=0
        for(i of this.marks){
            sum=sum+i
        }
        avg=sum/this.marks.length
        console.log(avg)
    }
}

//var s1= new Student("1","Glinta","21")
//var s2= new Student("2","Gli","22")
// s1.details()
// s2.details()              // to call the inside function
// console.log(s1)
// console.log(s1.Name)
// console.log(s2.Name)

var s1=new Student("3","Ammu","20", [90,50,70])
s1.average()