
function Report(a){

    const mxwrd = "/120"

    var msg,valms,txinp,sdbut;

    msg = document.getElementById('valcnt');
    
    valms = document.getElementById('wrtrepo');

    txinp = document.querySelector('.inp_wrt_report');
    sdbut = document.querySelector('.but_snd_report');

    var valtx = txinp.value;

    var vltxleng = (0 + (valtx.length));
    
    alert(vltxleng);
      
        
    

}
window.addEventListener('load', Report, false);
//window.addEventListener('resize',Exit, false);
