let num1= 123
let str:string = "hello"    // Type annotation
let num2
num2= 234
console.log("Type of :",typeof num2)

let x:any = [10,30,20]    //for ANY there is no type restrictions
x= 123
console.log("Type of :",typeof x)

let condition:boolean = true


var add= function(a,b){
    return a+b
}

console.log(add(10,20))

function greetings(msg:string):void{
    console.log("mesaage is :",msg)
}

greetings("welcome g")


var names:any=["Apple","Mango","Orange","Alphonso"]
names.push("strawberry")
console.log(names)

var newarray2= names.filter((i)=>{
    if(i.startsWith("A"))
    {
        return i
    }
})
console.log(newarray2)