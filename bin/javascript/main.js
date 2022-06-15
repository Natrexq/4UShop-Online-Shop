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
        
        location.href = "index.php";

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

    

    const home = document.getElementById('hm');
    const offer = document.getElementById('of');
    const cart = document.getElementById('ct');
    const privacy = document.getElementById('pv');
    const help = document.getElementById('hp');
    const back = document.getElementById('bc');

    back.addEventListener('click', function Back(){
        location.href = "index.php";
    });

    home.addEventListener('click', function Home(){
        location.href = "#home";
    });


    offer.addEventListener('click', function Offer(){
        location.href = "#products";
    });
    cart.addEventListener('click', function Cart(){
        location.href = "#home";
        setTimeout(function(){ 
            location.href = "cart.php";
        }, 1000);
    
    });
    privacy.addEventListener('click', function Privacy(){
        location.href = "privacy.html";
    });

    help.addEventListener('click', function Help(){
        location.href = "help.html";
    });
   
   
 

// location.href = "#home";
}
function Look(){
    document.getElementById('product').scrollIntoView();
}



window.addEventListener('load', FuConnect, false);
window.addEventListener('load', ButSystem, false);