var todo=[]
var tomo=[]
function dynamic(){
    //console.log("hello")
    
    //console.log(textvalue)
    // var parag= document.createElement("p")
    // var btn= document.createElement("button")
    // btn.innerHTML="Remove"
    // parag.innerHTML= textvalue
    // parag.setAttribute("id","p1")    //to set identical attribute id
    // var div= document.getElementById("demo")
    // div.appendChild(parag)
    // div.appendChild(btn)
    // todo.push(textvalue)
    // console.log(todo)

    var textvalue= document.getElementById("txt").value
    todo.push(textvalue)
    console.log(todo)
    document.getElementById("txt").value=""

    // 1 also can write here
   
    for(i in todo){
        var tododiv=document.createElement("div") //....................1
        tododiv.innerHTML=todo[i]+"<br><button onclick='remove("+i+")'>"+"Remove"+"</button>"
    }
    document.getElementById("mylist").appendChild(tododiv)
}

function remove(m){

    tomo.push(todo[m])
    todo.splice(m,1)
    console.log("Today list :",todo)
    console.log("Tomorrow list :",tomo)
    
//     var tomodiv= document.getElementById("div")
//     tomodiv.innerHTML= tomo
//   document.getElementById("mylist2").appendChild(tomodiv)
    var part=document.getElementById("second")
    document.getElementById("mylist2").innerHTML= tomo
    part.appendChild("mylist2")
    removeitem()
   
    

}

function removeitem(){
    divi1= document.getElementById("mylist")
    divi2= document.getElementById("mylist2")
    divi2.removeChild(divi1)
}
