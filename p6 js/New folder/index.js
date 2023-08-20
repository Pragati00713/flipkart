document.getElementById('rate').addEventListener('blur',mycal);

function mycal(){
     // alert("hello")
     let qty=parseInt(document.getElementById("qty").value);
     let rate=parseInt(document.getElementById("rate").value);
     let total=qty*rate;
     let  cgst=total*18.5/100;
     let sgst = total*18.5/100;
     let gst=cgst+sgst;
     let netprice=total+gst;

     document.getElementById("tp").value=total;
     document.getElementById("cgst").value=cgst;
     document.getElementById("sgst").value=sgst;
     document.getElementById("gst").value=gst;
     document.getElementById("np").value=netprice;
     
}