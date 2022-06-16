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
    //
    const valp4 = document.getElementById('impr4').style;
    const valp5 = document.getElementById('impr5').style;
    const valp6 = document.getElementById('impr6').style;
    //
    const valp7 = document.getElementById('impr7').style;
    const valp8 = document.getElementById('impr8').style;
    const valp9 = document.getElementById('impr9').style;
    //
    var valp1check = on;
    var valp2check = off;
    var valp3check = off;
    var valp4check = off;
    var valp5check = off;
    var valp6check = off;
    var valp7check = off;
    var valp8check = off;
    var valp9check = off;
    
 // PRODUCT 1
   if(valp1check == off){
    valp1.filter = "grayscale(75%)";
    valp1.opacity = "80%";
   
    
   }
 // PRODUCT 2
   if(valp2check == off){
    valp2.filter = "grayscale(90%)";
    valp2.opacity = "70%";
   

   }
   // PRODUCT 3
   if(valp3check == off){
    valp3.filter = "grayscale(90%)";
    valp3.opacity = "70%";
   
    
   }
   // PRODUCT 4
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
   
    
   }
    // PRODUCT 5
  if(valp5check == off){
    valp5.filter = "grayscale(90%)";
    valp5.opacity = "70%";
   
    
   }
    // PRODUCT
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
   
    
   }
    // PRODUCT
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
   
    
   }
    // PRODUCT
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
   
    
   }
    // PRODUCT
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
   
    
   }
    // PRODUCT
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
   
    
   }
   
   else{
     
   }
   return false;

}


window.addEventListener('load',DoBuy, false);
window.addEventListener('load',Status, false);