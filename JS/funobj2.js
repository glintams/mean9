// function product(id,name,price){
//     this.ID= id
//     this.Price= price
//     this.Name= name
    
//     this.incprice= function(amount){
//         this.Price=this.Price + amount
//       console.log(this.Price);
//     }


// }

// var p1= new product("1","1000",50)
// console.log(p1.Price)

// p1.incprice(50);
// p1.incprice(100);     



function save()
{
    var employee = new Object();
    alert("hello");
    console.log("hello");
    var empid = document.getElementById("empid").value;
    var empname = document.getElementById("empname").value;
    var empsalary = document.getElementById("salary").value;
    employee.empid = empid;
    employee.empname = empname;
    employee.empsalary = empsalary;
    alert(employee.empid);
    alert(employee.empname);
    alert(employee.empsalary);
    console.log(employee);
    return false;

}   

    
function objects()
{
    var student = new Object();
    console.log(student);
    student.name = "arun";
    student.age = 10;
    console.log(student);
    
    var student1 = new Object();
    student1 = { name : "arun1",
                 age  : "22",
                 average : function(m1,m2,m3)
                 {
                    return (m1+m2+m3)/3 ;
                 }
               };
               
    console.log("average : " + student1.average(10,20,30));
    console.log (student1);
    console.log(student1.hasOwnProperty('age'));


}






function student(rollno,name,age,marks){
this.rollno = rollno;
this.name  = name;
this.age = age;
this.marks = marks;
this.details = function (){
 console.log("name ",this.name)   ;
    }
this.average =  function ()
{
    var sum = 0; 
    for (i of marks)
    {
     sum = sum + i;
    }
    var avg  = sum / this.marks.length; 
    console.log(avg);
}  
}
var s1= new student("1","arun","20",[90,60,50]);
console.log(s1);
s1.details();
s1.average();






var prodlist=[];

function product(id,name,price){
    this.id = id;
    this.name  = name;
    this.price =  price;
    this.incprice = function (amount)
    {
        
         this.price = amount + this.price ;
        
     
        console.log(this.price);
    }   
    
    
}








var p1= new product("1","abcd",90);
p1.incprice(100);
var p2= new product("1","abcd",90);

console.log(p1.name == p2.name);
    

function save1()
{
    
    alert("hello2");
    
    var prodid = document.getElementById("prodid").value;
    var prodname = document.getElementById("prodname").value;
    var price = document.getElementById("price").value;
    var p1= new product(prodid,prodname,price);

//another section
    pstr=JSON.stringify(p1)
    console.log("string object",pstr)
    data= JSON.parse(pstr)
    console.log(data["name"])
    console.log(data.name)

//continuation of 140 line
    console.log(p1);
    prodlist.push(p1)
    console.log(prodlist)
    

    for(obj of prodlist){
        // console.log(obj.id)
        // console.log(obj.name)
        // console.log(obj.price)
        //document.getElementById('list').innerHTML= "P ID ="+obj.id+ "P Name ="+obj.name+"Price ="+obj.price

        var newdiv=document.createElement('div')
        // document.createElement('div1').appendChild(newdiv)
       // newdiv.innerHTML="new div"        //.............................test
        //document.getElementById("div1").appendChild(newdiv)       //............test

        var result= "P ID ="+obj.id+ "P Name ="+obj.name+"Price ="+obj.price
    

    }
    return false;
}   
	
