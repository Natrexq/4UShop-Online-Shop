 var PhpConnect = "hide"/*false,true*/;
 var ercode = 404;

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
     console.log("0x000: Something went wrong");

 }
 else{
     
     console.log("0x003: Server can't check database connection status!");
     
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
function GoCart(){
    location.href = "/bin/cart.html";
}
function BackHome(){
    location.href = "/bin/index.php";
    
}