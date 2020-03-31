let result=[10,20,30,40].reduce(function(a,b){
    console.log("a=",a)
    console.log("b=",b)
    return a+b
})

console.log("result =",result)

let result1=[10,20,30,40].reduce((a,b)=>{
    return a+b
})

console.log("result =",result1)

let l = ["a","b","c","d"]
console.log(l.shift())
console.log(l)
console.log(l.unshift("e"))
console.log(l)


let k=[10,20,30,40].reduceRight(function(a,b){
    console.log(a)
    console.log(b)
    return a-b
})

console.log(k)


let l1=[11,22,33,10].map((x)=>{
    return x**2
})
console.log(l1)


let l2=[11,22,33,10].filter((x)=>{
    if(x%2==0){
        return x
    }
})
console.log(l2)


let s=["a","b","c"].join(",")
console.log(s)

var x=['a','b','c']
var[v1,v2,v3]=x
console.log(v1)
var x1= [[10,20,30],[40,50,60]]
console.log(x1)
console.log(x1[0][1])
console.log(x1[1])

let a:any[]=new Array(3)

a.push(1)
a.push(1)
a.push(1)

console.log(a)
console.log(typeof a)
