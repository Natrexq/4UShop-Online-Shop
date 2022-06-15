function Rules(){

        const gen =  document.getElementById('gen');
        const cok =  document.getElementById('cok');
        const prv =  document.getElementById('prv');
        const lic =  document.getElementById('lic');

        //
            const rules =  document.getElementById('rules');
            const cookies =  document.getElementById('cookies');
            const privacy =  document.getElementById('privacy');
            const licence =  document.getElementById('licence');


        //
       
        const home = document.getElementById('home');
        const back = document.getElementById('back');
        const more = document.getElementById('more');
        const dvbox = document.getElementById('dwbox');
        
    

        more.addEventListener('click', function More(){
            dvbox.scrollIntoView();
            return false;
        });
        gen.addEventListener('click', function Do(){
            rules.scrollIntoView();
            return false;
        });
        cok.addEventListener('click', function Do(){
            cookies.scrollIntoView();
            return false;
        });
        prv.addEventListener('click', function Do(){
            privacy.scrollIntoView();
            return false;
        });
        lic.addEventListener('click', function Do(){
            licence.scrollIntoView();
            return false;
        });
        back.addEventListener('click',function Do(){
            home.scrollIntoView();

        });

        //
        


}






window.addEventListener('load', Rules,false);