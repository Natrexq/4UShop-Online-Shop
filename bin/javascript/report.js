
function Report(a){

    const mxwrd = "/120"

    var msg,valms,txinp,sdbut;

    msg = document.getElementById('valcnt');
    
    valms = document.getElementById('wrtrepo');

    txinp = document.querySelector('.inp_wrt_report');
    sdbut = document.querySelector('.but_snd_report');

    var valtx = txinp.value;

    var vltxleng = (0 + (valtx.length));
  


    sdbut.addEventListener('click', function SendReport(){

        if(txinp.value == ""){
            alert("First you must write content of report");

        }
        else{
            if(vltxleng > 10){
                alert(txinp.value);
                
    
            }
            else{
                if(vltxleng < 10){
                    alert("Content of report must be longer than 10 worlds!");
                }
                else{

                }
               
            }
            
            
        }


        });
       
        txinp.addEventListener('keydown', function WrdStats(){
            
           
            
             msg.innerHTML = vltxleng + "/120";
  
      });
      
        
    

}
function Exit(){

    alert('Are you sure dont need a help?');

}


window.addEventListener('load', Report, false);
//window.addEventListener('resize',Exit, false);
