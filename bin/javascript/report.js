
function FuCounter(){

    var worldsval,counter,sendbut,mathval;

    counter = document.getElementById('count');
    worldsinp = document.getElementById('wrtrepo');
    worldsval = document.getElementById('wrtrepo').value;
    sendbut = document.getElementById('sndrepo');




    mathval = (0 + (worldsval.length));

    counter.innerHTML = mathval + "/70";
    
    worldsinp.addEventListener('keydown', FuCounter, false);

    sendbut.addEventListener('click', FuCounter,false);

}









window.addEventListener('load', FuCounter, false);