document.getElementById('btn').addEventListener("click",myAdd);
function myAdd()
{
    var myno1=parseInt(document.getElementById("n1").value);
    var myno2=parseInt(document.getElementById("n2").value);

    var myadd=myno1+myno2;
    document.getElementById("ans").innerHTML="my addition:"+myadd;
}