 var PhpConnect = true/*"hide"/*false,true*/;
 var ercode = 404;

var er0x000 = "0x000: Something went wrong"; 
var er0x003 = "0x003: Server can't check database connection status!"; 
var er0x004 = "0x004: Unkown "; 





function FuConnect(){

       
        

    var controlelement,connected,disconnected;

    connected = "ch_control_con";
    disconnected = "ch_control_dis";
    controlelement = document.getElementById('con_el');
    
     
    if(PhpConnect == true){
     controlelement.className = connected;
     controlelement.innerHTML = " Connected";

 }
 if(PhpConnect == false){
     controlelement.className = disconnected;
     controlelement.innerHTML = " Disconnected";
     console.log(er0x000);

 }
 else{
     
     console.log(er0x003);
     
 }
 

  
    



}


function Main(){

    var click;

    click = document.getElementById('foru');

    click.addEventListener('click', function DoClicked(){

        alert("g");
    } );

    

}
function Load(){

    var turn = 2;

    if(turn == 1){
        alert("Js file is turned off");

    }
    if (turn == 2) {


        
    } 
    else{

        var getinfo,getwth,gethei,px;
        px = "px";

        gethei = screen.availHeight;
        getwth = screen.availWidth;


        getinfo = "[DISPLAY] " + getwth + px + " " + gethei + px;
     
        
        var show;
    
        show = document.getElementById('show');
        show.innerHTML = getinfo;
      


    }



}

function CheckDiv(){
    var sizwth,sizhei,control,valbox,checkbox;

    control = 0;

    valbox = document.getElementById('valbox').value;

 
    checkbox = document.getElementById(valbox);



    sizwth = checkbox.offsetWidth;
    sizhei = checkbox.offsetHeight;
    var finsiz;

    finsiz = sizwth + sizhei;


    if(control == 1){



    }
        if(finsiz < 1){

            alert("problem");

        }
        else{
            if(finsiz > 1){

                alert("[SIZE OF: ]" + valbox + " " + sizwth + " " + sizhei + " ");
            
    
            }
            else{
                alert("[ERROR: ]" + "Nie ma");
                
              
        
            }
        


        }
      
 
        

}
function ButSystem(){

    var home,offer,cart,privacy,help,back;

    home = document.getElementById('');
    offer = document.getElementById('');
    cart = document.getElementById('');
    privacy = document.getElementById('');
    help = document.getElementById('');
    back = document.getElementById('');


}

function GoCart(){
    location.href = "#home";
    setTimeout(function(){ 
        location.href = "cart.php";
    }, 1000);

}
function BackHome(){
    location.href = "index.php";
    
}
function GetHelp(){
    location.href = "help.html";
    
}
function Look(){
    document.getElementById('product').scrollIntoView();
}
window.addEventListener('load', FuConnect, false);
