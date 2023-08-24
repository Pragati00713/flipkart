document.getElementById("ramji").addEventListener("click",myVar)
 let arrowObj=document.getElementById("arrow");
 let headObj=document.getElementById("head");
 
let arrowLeft=150;
let myInterval;
let headLeft=900;

function moveRface(){
     headObj.style.left=headLeft+="px";
}


function myVar(){
     // alert("hello")
     arrowLeft++;
     arrowObj.style.left=arrowLeft="px";



}