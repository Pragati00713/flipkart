document.getElementById("id6").addEventListener("blur", hello)


function hello() {

     let sub1 = parseInt(document.getElementById('id1').value);
     let sub2 = parseInt(document.getElementById('id2').value);
     let sub3 = parseInt(document.getElementById('id3').value);
     let sub4 = parseInt(document.getElementById('id4').value);
     let sub5 = parseInt(document.getElementById('id5').value);
     let sub6 = parseInt(document.getElementById('id6').value);
     let total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;

     let per = total * 100 / 600;

     document.getElementById('TM').value = total;
     document.getElementById('P').value = per;
}