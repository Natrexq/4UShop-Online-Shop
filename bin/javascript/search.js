function Search(){
    // it works !alert("Test comunicate!");
 
   var srchbut = document.getElementById('srchbut');

    srchbut.addEventListener('click', DoSearch,false);
            function DoSearch(){
                alert("asdsadasdasdas");
            }


   alert(srchbut);
}

window.addEventListener('load', Search,false);