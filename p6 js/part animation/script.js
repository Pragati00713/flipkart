document.getElementById("player1").addEventListener("click",play1Move);
document.getElementById("player2").addEventListener("click",play2Move);
var p1top=300;
var p1left=150;
var ballObj;
var myInte1;
var myInte2;

   ballObj=document.getElementById("ball");

function ball1Move()
{
 p1top-=4;
 p1left+=5;
 ballObj.style.top=p1top+"px";
 ballObj.style.left=p1left+"px";
 if(p1left>740)
 {
    clearInterval(myInte1);
 }

}

function play1Move()
{
    setInterval(ball1Move,20);
}
function ball2Move()
{
 p1top-=4;
 p1left+=5;
 ballObj.style.top=p1top+"px";
 ballObj.style.left=p1left+"px";
 if(p1left>1280)
 {
    clearInterval(myInte2);
 }

}
function play2Move(){
}
setInterval(ball2Move,20);