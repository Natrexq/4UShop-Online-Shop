function Search(){

    var srbut,srinp,srval,website,scroll,slist1,slist2,slist3,index1,index2,index3,easteregg,inegg;

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
                    //
                    slist2 = ["privacy", "rules", "rule", "term", "terms", "licence", "cookie", "cookies", "users", "settings", "pv", "data", "regulations", "user data", "regulations"];
                    index2 = slist2.includes(srval);
                    //
                    slist3 = ["help", "problem", "problems", "support", "bug", "bugs", "report", "advice", "service"];
                    index3 = slist3.includes(srval);
                    //
                    easteregg = ["69", "420", "ass", "fuck", "blayt", "poo"];
                    inegg = easteregg.includes(srval);

                    if(website == "/index.php"){
                        if(index1 == true){
                        
                            scroll.scrollIntoView();
                           
                        }
                        if(index2 == true){
                            alert("If you wanna find: rules,terms,cookies and the like, go to the rules section");
                        }
                        if(index3 == true){
                            alert("If you need help,our support or report bugs, go to the help section");
                        }
                        if(inegg == true){
                            alert("Ok?");
                            window.close();
                            window.open("https://www.youtube.com/watch?v=QDia3e12czc");
                            
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
                    

                        else{
                            alert("I can't find it on website :/ , change the content of text input or try again");
                        }
                    }



                

                    



                }

        }

   



        srbut.addEventListener('click',DoFind,false);
}




window.addEventListener('load', Search,false);