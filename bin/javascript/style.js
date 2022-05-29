// In this file you find every js function who appiles appearance of website

function Slide(){
    const doc = document.getElementById('doel');
    doc.addEventListener('click', function DoClick(){

            alert('click1');

    });
    doc.addEventListener('drag', function DoDbClick(){

        alert('dbclick!');

    });

    
    

}
