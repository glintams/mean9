var a = 10, b = 40, c =30
var sub =  b - a
var mult = a * b 
var div = a / b
var mod = b % a 
var x  = 10**3 

console.log("type", typeof aa);
console.log("type", typeof ab);

console.log(sub)
console.log(div)
console.log(mult)
console.log(mod)
console.log(x)

str1 = "hello"
str2 = "world"
str3 = str1 + " " +  str2
console.log(str3)

//relational operators
console.log("relational operators")
console.log(a<b)
console.log(a>b)
console.log(a==b)

var s="10"; var k = 10;
console.log (s == k ) // only check the value
console.log (s === k ) // checks value and data type
console.log (s != k)
//logical operators
console.log("logical operators")
console.log (  a < b && b > c)
console.log (  a < b || b > c)
//conditional operator
console.log("conditional operators")
console.log(a > b ?  "a": "b")
//conditional statements
console.log("conditional statements")
var x = 100, y = 90, z = "hello"
if (typeof x != "number")
{
 x += 20
 console.log("if block")
 console.log(x)
}
else if ( typeof z == "string")
{
    console.log("else if")
}
else{
    console.log(x, "else block")
    console.log(x)
}

console.log("largest number")
console.log(a > b ?  (a > c ?  a : c) : (b > c ? b : c))

var x = 2001
if (x % 4 == 0)
    console.log("leap year")
else 
    console.log("not leap year")
console.log("switch cases")    
 switch(x)
 {
     case 2000:
         {
         console.log (x, " is 2000");
         break;
         }
     default:
         {
        console.log (x, "is not 2000");
        //for printing into the page use document.write
        document.write (x," is not 2000");
        break;
         }
 }
 //creating variable as object
 var strobj = new String("hello"); 
 console.log(strobj,"type ", typeof strobj);
var school = new Object();
school = {
    name : "expertzlab",
    location : "cochin",
    established : 2000
}

console.log(school,"type ", typeof school);
console.log(school.name.length);

function buttonfunction()
{
    alert("test function");
}