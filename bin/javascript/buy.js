// In this file you find buy product system
var er0x000 = "0x000: Something went wrong"; 
var er0x004 = "0x004: Unkown "; 

function aBuy(ida){

        const prod = ida;
        var prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9;
        prod1 = "desp1";
        prod2 = "desp2";
        prod3 = "desp3";
        prod4 = "desp1";
        prod5 = "desp2";
        prod6 = "desp3";
        prod7 = "desp1";
        prod8 = "desp2";
        prod9 = "desp3";


            if(prod == prod1){
            
                alert("1");
                return false;
            }
            if(prod == prod2){
            
                alert("2");
                return false;
            }
            if(prod == prod3){
            
                alert("3");
                return false;
            }
            if(prod == prod4){
            
                alert("4");
                return false;
            }
            if(prod == prod5){
            
                alert("5");
                return false;
            }
            else{
                  console.log(er0x000);
            }
                
            



        









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
window.addEventListener('load',aBuy, false);