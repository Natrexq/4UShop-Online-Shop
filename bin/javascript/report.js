var empty = "";

function FuCounter(){

    var worldsval,counter,mathval;

    counter = document.getElementById('count');
    worldsinp = document.getElementById('wrtrepo');
    worldsval = document.getElementById('wrtrepo').value;
  




    mathval = (0 + (worldsval.length));

    counter.innerHTML = mathval + "/70";
    
    worldsinp.addEventListener('keydown', FuCounter, false);
    worldsinp.addEventListener('blur', FuCounter, false);

   if(mathval == 70){
    counter.innerHTML = "Max";
   }

}
function Report(){
    var worldsval = document.getElementById('wrtrepo').value;
    var mathval = (0 + (worldsval.length));
    
    if(worldsval == empty){
        alert("Warning: First you must write something in message box!");
        return false;
    }
    if(mathval < 10){
        alert("Warning: You must write more than 10 words!");
    }
    else{
         alert("Error: your report: '"+worldsval+"' can't be send because report system has't be finished'");
         return false;


        

    }
    


}



window.addEventListener('load', FuCounter, false);