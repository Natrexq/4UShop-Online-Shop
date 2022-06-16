// In this file you find buy product system
var er0x000 = "0x000: Something went wrong"; 
var er0x004 = "0x004: Unkown "; 

function DoBuy(){
    
    var product1 = document.getElementById('desp1');
    var product2 = document.getElementById('desp2');
    var product3 = document.getElementById('desp3');



    product1.addEventListener('click', function Do(){
        alert("product: 1");
    });
    product2.addEventListener('click', function Do(){
        alert("product: 2");
    });
    product3.addEventListener('click', function Do(){
        alert("product: 3");
    });
   
}

function Slide(){
    const doc = document.getElementById('doel');
    doc.addEventListener('click', function DoClick(){

            alert('click1');

    });
    doc.addEventListener('drag', function DoDbClick(){

        alert('dbclick!');

    });

    
    

}
window.addEventListener('load',Buy, false);