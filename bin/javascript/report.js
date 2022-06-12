
function FuCounter(){

    var worldsval,counter,mathval;

    counter = document.getElementById('count');
    worldsinp = document.getElementById('wrtrepo');
    worldsval = document.getElementById('wrtrepo').value;
  




    mathval = (0 + (worldsval.length));

    counter.innerHTML = mathval + "/70";
    
    worldsinp.addEventListener('keydown', FuCounter, false);

   

}

window.addEventListener('load', FuCounter, false);