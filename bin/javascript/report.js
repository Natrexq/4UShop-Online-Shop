
function Report(a){

    const mxwrd = "/120"

    var msg,txval,txinp,sdbut;

    msg = document.getElementById('valcnt');
    txval = document.getElementById('wrtrepo').value;
    txinp = document.querySelector('.inp_wrt_report');
    sdbut = document.querySelector('.but_snd_report');


    msg.innerHTML = "val"+ mxwrd;

    sdbut.addEventListener('click', function SendReport(){

        alert(txval);

    });

}
function Exit(){

    alert('Are you sure dont need a help?');

}


window.addEventListener('load', Report, false);
//window.addEventListener('resize',Exit, false);
