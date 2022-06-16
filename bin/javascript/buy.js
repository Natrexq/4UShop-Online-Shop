// In this file you find buy product system
var er0x000 = "0x000: Something went wrong"; 
var er0x004 = "0x004: Unkown "; 

function DoBuy(){
    
    var product1 = document.getElementById('desp1');
    alert(product1);
   
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