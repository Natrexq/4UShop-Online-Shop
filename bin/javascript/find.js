function Search(){

    var srbut,srinp,srval,website,scroll,slist1,slist2,inpage,index1,index2;

    srbut = document.getElementById('srbut');
    srinp = document.getElementById('srinp');
    
    //
    srval = srinp.value;
    website = location.pathname;
    //
    scroll = document.getElementById('products');
    
        function DoFind(){
                srval = srinp.value;
            
                if(srval == ""){
                    alert("First you must write something in text input!")
                }
                else{
                    
                    slist1 = ["shop", "offer", "buy", "pc", "computer", "gameing", "game", "games", "all in one", "product", "products", "cpu", "gpu"];
                    index1 = slist1.includes(srval);


                    if(website == "/index.php"){
                        if(index1 == true){
                        
                            scroll.scrollIntoView();
                           
                        }
                        else{
                            alert("I can't find it on website :/ , change the content of text input or try again");
                        }
                    }
                    else{
                        
                        if(index1 == true){
                            alert("If you wanna find shop offer, please click home button and scroll down");
                        }
                        else{
                            alert("I can't find it on website :/ , change the content of text input or try again");
                        }
                    }



                

                    



                }

        }

   



        srbut.addEventListener('click',DoFind,false);
}




window.addEventListener('load', Search,false);