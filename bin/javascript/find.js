function Search(){
    //general var's dont touch it
    var srbut,srinp,srval,website,scroll,slist1,slist2,slist3,index1,index2,index3,easteregg,inegg;

    // search button and text box input
    srbut = document.getElementById('srbut');
    srinp = document.getElementById('srinp');
    
    // value from text box and var with location of website where actually user is
    srval = srinp.value;
    website = location.pathname;
    //for scroll 
    scroll = document.getElementById('products');
    
        function DoFind(){

                srval = srinp.value;
            
                if(srval == ""){
                    alert("First you must write something in text input!")
                }
                else{
                    // List with words about shoping,buying and the like
                    slist1 = ["shop", "offer", "buy", "pc", "computer", "gameing", "game", "games", "all in one", "product", "products", "cpu", "gpu"];
                    //
                    index1 = slist1.includes(srval);
                    //List with words about terms of website rules and more
                    slist2 = ["privacy", "rules", "rule", "term", "terms", "licence", "cookie", "cookies", "users", "settings", "pv", "data", "regulations", "user data", "regulations"];
                    //
                    index2 = slist2.includes(srval);
                    //List with words about problems,bugs...
                    slist3 = ["help", "problem", "problems", "support", "bug", "bugs", "report", "advice", "service"];
                    //
                    index3 = slist3.includes(srval);
                    //
                    //Easter egg You must check it 
                    easteregg = ["69", "420", "ass", "fuck", "blayt", "poo"];
                    inegg = easteregg.includes(srval);
                    //
                    



                    
                    if(website == "/index.php"){
                        if(index1 == true){
                        
                            scroll.scrollIntoView();
                            return false;
                        }
                        if(index2 == true){
                            alert("If you wanna find: rules,terms,cookies and the like, go to the rules section");
                            return false;
                        }
                        if(index3 == true){
                            alert("If you need help,our support or report bugs, go to the help section");
                            
                            return false;
                            
                        }
                        if(inegg == true){
                            alert("Ok?");
                            window.open("https://www.youtube.com/watch?v=QDia3e12czc");
                            return false;
                            
                        }
                        else{
                            alert("I can't find it on website :/ , change the content of text input or try again");
                        }
                    }
                    else{
                        
                        if(index1 == true){
                            alert("If you wanna find shop offer, go to the home section and scroll down");
                            
                            return false;
                        }
                        if(index2 == true){
                            alert("If you wanna find: rules,terms,cookies and the like, go to the rules section");
                            return false;
                        }
                        if(index3 == true){
                            alert("If you need help,our support or report bugs, go to the help section");
                            return false;
                        }
                        if(inegg == true){
                            alert("Ok?");
                            window.open("https://www.youtube.com/watch?v=QDia3e12czc");
                            
                            return false;
                        }

                        else{
                            alert("I can't find it on website :/ , change the content of text input or try again");
                            return false;
                        }
                    }



                

                    



                }

        }

   



        srbut.addEventListener('click',DoFind,false);
}




window.addEventListener('load', Search,false);