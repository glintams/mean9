function view(...args){           //... indicates rest parameters because there is no arg restrictions

    for(let i of args){

        console.log(i)
    }
}

view(10,30,50,50,"hello",true)

var str1:string ='123'
var i:number=<number><any>str1     // Type assertion
console.log("After assertion type of i :",str1)
var b='true'
var t:boolean=<boolean><any>b
console.log(typeof t)


function greetings(msg:string,x?:number){          // x is an optional parameter. prefixed with ?
    console.log(msg)
    console.log(x)
}

greetings("good eve")


// function overload

function addition(x:number,y:number):void;
function addition(a:string,b:string):void;
function addition(i:any,j:any):void{

    console.log(i,j)
}

addition(10,100)
addition("hello","world")

function getvalues(x:string|string[]){         // "|" indicates piping or union 

    if(typeof(x)=="string"){
        console.log("message :",x)
    }
    else{
        for(let e of x){
            console.log(e)
        }
    }
}

getvalues("hello all")
getvalues(["message:","hi","hello"])


// map and filter functions
let values:number[] = [10,11,22,30]
let mappedarray = values.map((x)=>{

    return x**2
})

let filterredarray = values.filter((x)=>{ 
    if(x%2==0){
        return x
    }
})

console.log(mappedarray)
console.log(filterredarray)