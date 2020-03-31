
  var result= localStorage.getItem("names")
  var names=JSON.parse(result)

function checkdata(){
   // alert("Key press")
    var data= document.getElementById("txt").value
  


   var searchresult= names.filter(x=>{
       if(x.startsWith(data)){
           return x
       }

    })

    console.log(searchresult)


    var parag= document.createElement("p")
    div= document.getElementById("div1")
    parag.innerHTML=searchresult
    div.appendChild(parag)

    
}