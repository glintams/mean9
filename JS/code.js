var a = 10, b = 40, c =30
var sub =  b - a
var mult = a * b 
var div = a / b
var mod = b % a 
var x  = 10**3 



function printUserName()
{
    var name1 ;
    //to get text from input box
    name1= document.getElementById("userName").value
    
    alert("hello " +  document.getElementById("userName").value);
    alert (name1);
    
}
function changeColor() 
{
 document.getElementById("p1").style.color = "red";
}
function showImage()
{
    if (document.getElementById("img2").style.display != "block")
    {

        document.getElementById("img2").style.display = "block";
        document.getElementById("img1").style.display = "none";
    }
    else 
    {
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "none";
    }
    
}
function validateform()
{
    
    if(document.getElementById("name").value  == "")
    {
        alert("name is mandatory");
        document.getElementById("name").focus();
        return false;
    }
    else if (document.getElementById("password").value  == "")
    {
        alert("password is mandatory");
        
        document.getElementById("password").focus();
        return false;
    }
    else if (document.getElementById("password").value.length <= 4 || document.getElementById("password").value.length > 8) 
    {
        alert("password min length is 4 and max length is 8");
        document.getElementById("password").focus();
        return false;
    }
    else if (document.getElementById("age").value  == "")
    {
        alert("age is mandatory");
        document.getElementById("age").focus();
        return false;

    }
    
    else if (document.getElementById("mobile").value  == "")
    {
        document.getElementById("mobile").focus();
        alert("mobile is mandatory");
        return false;

    }    
     return confirm("Do you want to continue?");
     
}
function showAlertState(){

    alert("hello " +  document.getElementById("state").value);
    document.getElementById("text1").value  = document.getElementById("state").value;
}
function sum1(){

    
    document.getElementById("text2").value  =parseInt(document.getElementById("num1").value)  
                                             + parseInt(document.getElementById("num2").value);
}
function showHide()
{   
    if (document.getElementById("showhidediv").style.display != "block")
        document.getElementById("showhidediv").style.display = "block";
    else
        document.getElementById("showhidediv").style.display = "none";
}