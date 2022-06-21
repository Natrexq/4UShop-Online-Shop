// In this file you find buy product system
var er0x000 = "0x000: Something went wrong"; 
var er0x004 = "0x004: Unkown "; 

var on = true;
var off = false;


//STATUS

 //STATUS CONTROLER

var valp1check = on;
var valp2check = on;
var valp3check = off;
var valp4check = off;
var valp5check = off;
var valp6check = off; 
var valp7check = off;
var valp8check = off;
var valp9check = off;
// SELL COMUNICATE

const wait = "Please wait";
const soon = "Soon...";
const sold = "Sorry,this product was  sold out!";
const serror = "You can't do it";
const wrong = "Sorry, something went wrong! Try again";




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
        if(valp1check == off){
            alert(sold);
            return false;
        }
        else{
            //SOON

            alert(soon);
            return false;

        }
        
        return false;
        
    });
    product2.addEventListener('click', function Do(){
        if(valp2check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            
            return false;
            

        }
        
        return false;
    });
    product3.addEventListener('click', function Do(){
        if(valp3check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
    //
    product4.addEventListener('click', function Do(){
        if(valp4check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
    product5.addEventListener('click', function Do(){
        if(valp5check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
    product6.addEventListener('click', function Do(){
        if(valp6check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
     //
    product7.addEventListener('click', function Do(){
        if(valp7check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
    product8.addEventListener('click', function Do(){
        if(valp8check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
    product9.addEventListener('click', function Do(){
        if(valp9check == off){
            alert(serror);
            return false;
        }
        else{
            //SOON
            
            alert(soon);
            return false;

        }
    });
   
}


function Status(){
    //STATUS FUNCTION

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
   
   
    
    //SOURCE

    var product1 = document.getElementById('desp1').style;
    var product2 = document.getElementById('desp2').style;
    var product3 = document.getElementById('desp3').style;
    //
    var product4 = document.getElementById('desp4').style;
    var product5 = document.getElementById('desp5').style;
    var product6 = document.getElementById('desp6').style;
    //
    var product7 = document.getElementById('desp7').style;
    var product8 = document.getElementById('desp8').style;
    var product9 = document.getElementById('desp9').style;



    
 // PRODUCT 1
   if(valp1check == off){
    valp1.filter = "grayscale(75%)";
    valp1.opacity = "80%";
    product1.opacity = "80%";
   
    
   }
 // PRODUCT 2
   if(valp2check == off){
    valp2.filter = "grayscale(90%)";
    valp2.opacity = "70%";
    product2.opacity = "80%";
   

   }
   // PRODUCT 3
   if(valp3check == off){
    valp3.filter = "grayscale(90%)";
    valp3.opacity = "70%";
    product3.opacity = "80%";
   
    
   }
   // PRODUCT 4
  if(valp4check == off){
    valp4.filter = "grayscale(90%)";
    valp4.opacity = "70%";
    // opacity of text
    product4.opacity = "80%";


   
    
   }
    // PRODUCT 5
  if(valp5check == off){
    valp5.filter = "grayscale(90%)";
    valp5.opacity = "70%";
       // opacity of text
    product5.opacity = "80%";
   
    
   }
    // PRODUCT 6
  if(valp6check == off){
    valp6.filter = "grayscale(90%)";
    valp6.opacity = "70%";
       // opacity of text
    product6.opacity = "80%";
   
    
   }
    // PRODUCT 7
  if(valp7check == off){
    valp7.filter = "grayscale(90%)";
    valp7.opacity = "70%";
       // opacity of text
    product7.opacity = "80%";
   
    
   }
    // PRODUCT 8
  if(valp8check == off){
    valp8.filter = "grayscale(90%)";
    valp8.opacity = "70%";
       // opacity of text
    product8.opacity = "80%";
    
   }
    // PRODUCT 9
  if(valp9check == off){
    valp9.filter = "grayscale(90%)";
    valp9.opacity = "70%";
       // opacity of text
    product9.opacity = "80%";
   
    
   }
  
   
   else{
     
   }
   return false;

}

window.addEventListener('load',Status, false);
window.addEventListener('load',DoBuy, false);
