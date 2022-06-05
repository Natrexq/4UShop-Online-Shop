
function Report(a){

    var global,inpval,message,svmessage,sendbut,wrdsts;

        wrdsts = document.querySelector('.inptx_counter');

        sendbut = document.getElementById('sndrepo');

        inpval = document.getElementById('wrtrepo');

        valinp = inpval.value;

  


    sendbut.addEventListener('click', function SndBut(){

        if(valinp == ""){
            alert("First you must write report");
    


        }
        else{
           alert(valinp);
     

        }



         

       

        });
    wrdsts.addEventListener('click', function WrdStats(){

          alert("click");

    });



}


window.addEventListener('load', Report, false);