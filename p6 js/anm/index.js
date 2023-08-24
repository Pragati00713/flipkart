document.getElementById("player1").addEventListener("click",myMove);
document.getElementById("player2").addEventListener("click",myReturn);


function myMove(){
     var myInerval;
     myleft=190;
     myInerval=setInterval(myStart,10);

     function myStart(){
          myleft+=5;
          let ballObj=document.getElementById("ball");
          ballObj.style.left=myleft+"px";
          if(myleft>1000){
               clearInterval(myInerval);
          }
     }
   
}  