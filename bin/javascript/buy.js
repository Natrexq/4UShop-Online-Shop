// In this file you find buy product system
var er0x000 = "0x000: Something went wrong"; 
var er0x004 = "0x004: Unkown "; 

var on = true;
var off = false;

function DoBuy(){

    

   
    var product1 = document.getElementById('desp1');
    var product2 = document.getElementById('desp2');
    var product3 = document.getElementById('desp3');
    //
    var product4 = document.getElementById('desp4');
    var product5 = document.getElementById('desp5');
    var product6 = document.getElementById('desp6');
    //
    var product7 = document.getElementById('desp7');
    var product8 = document.getElementById('desp8');
    var product9 = document.getElementById('desp9');


    product1.addEventListener('click', function Do(){
          const valp1 = document.getElementById('impr1').style;
           var check = off;

          if(check == on){
            



          }
          else{
            valp1.filter = "grayscale(75%)";
            valp1.opacity = "80%";
            alert("Error: You can't buy this product :/");
          }

            window.addEventListener('load', Status,false);
        
    });
    product2.addEventListener('click', function Do(){
        alert("product: 2");
    });
    product3.addEventListener('click', function Do(){
        alert("product: 3");
    });
    //
    product4.addEventListener('click', function Do(){
        alert("product: 4");
    });
    product5.addEventListener('click', function Do(){
        alert("product: 5");
    });
    product6.addEventListener('click', function Do(){
        alert("product: 6");
    });
     //
    product7.addEventListener('click', function Do(){
        alert("product: 7");
    });
    product8.addEventListener('click', function Do(){
        alert("product: 8");
    });
    product9.addEventListener('click', function Do(){
        alert("product: 9");
    });
   
}


function Status(){
    const valp1 = document.getElementById('impr1').style;
    const valp2 = document.getElementById('impr2').style;
    const valp3 = document.getElementById('impr3').style;
    var valp1check = on;
    var valp2check = on;
    var valp3check = on;
    

   if(valp1check == off){
    valp1.filter = "grayscale(75%)";
    valp1.opacity = "80%";
   
    return false;
   }

   if(valp2check == off){
    valp2.filter = "grayscale(75%)";
    valp2.opacity = "80%";
   
    return false;
   }
   if(valp3check == off){
    valp3.filter = "grayscale(75%)";
    valp3.opacity = "80%";
   
    return false;
   }
   else{
     
   }
   return false;

}


window.addEventListener('load',DoBuy, false);
window.addEventListener('load',Status, false);