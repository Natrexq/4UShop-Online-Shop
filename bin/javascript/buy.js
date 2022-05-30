// In this file you find buy product system
var er0x000 = "0x000: Something went wrong"; 
var er0x004 = "0x004: Unkown "; 

function aBuy(ida){

        const prod = ida;
        var prod1,prod2,prod3;
        prod1 = "desp1";
        prod2 = "desp2";
        prod3 = "desp3";


            if(prod == prod1){
                //PHP SENDS INFO
                window.open('shopping.php');
            }
            else{
                if(prod == prod2){
                     //PHP SENDS INFO
                    window.open('shopping.php');
                }
                else{
                    if(prod == prod3){
                         //PHP SENDS INFO
                        window.open('shopping.php');

                    }
                    else{
                        console.log(er0x000);
                    }
                }
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
