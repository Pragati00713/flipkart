document.getElementById("btn").addEventListener("click",myPassGen);

function myPassGen()
{
    let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz*!";
    let strlen=str.length;
    console.log(strlen);
    let mypass="";

    for(var i=1; i<=8; i++)

    
   { 
    var myno=Math.floor(Math.random()*strlen);
    mypass+= str.charAt(myno);
}
document.getElementById("demo").innerHTML=mypass;
}