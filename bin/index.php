<?php



?>

<!DOCTYPE html>
<html lang="en">
     <!---home index-->
     <head>
      
        <title>4UShop.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script type="text/javascript">var info = "<?= $info ?>";</script>
        <script src="javascript/main.js" type="text/javascript"></script>
  

        <script src="javascript/buy.js" type="text/javascript"></script>
    </head>
 
    <body onload="Main()">
    <link rel="stylesheet" href="css/main.css">

        <div class="in_home" id="home">
            <div class="home_el">
          
       

                <div class="el_lgs">
                <h1 class="tx_home" id="foru">4USHOP</h1>

                </div>
                    <div class="el_fixnav">
                        
                      <div class="el_nav">
                      <div class="nav_contback">
                                <h2 id="con_el" class="ch_control"></h2>
                                </div>
                            <div class="nav_butback">
                                
                              
                           
                            <button type="submit" class="nav_navbuts">Status</button>
                                        <button type="submit" class="nav_navbuts">About</button>
                                        <button type="submit" class="nav_navbuts">Contact</button>
                                        <button type="submit" class="nav_navbuts">Settings</button>

                            </div>
                                     

                                </div>
                          
                                
                                <div class="el_srch">
                        
                                            <input  placeholder="Type something" type="search" name="" class="inp_srch" id="">
                                            <button class="but_dosrch" type="submit">Search</button>
                                     </div>

                    </div>
            
               
            </div>
           

        </div>
        <div class="in_home_nav" id="homenav">
  
        <div class="home_nav_buts" >
        <div class="hmnav_cart">
                    <button onclick="GoCart()" type="submit" class="but_gocart"></button>
                    <h1 class="cartcount"><?php ?></h1>
            </div>

            <h3 id="hm" class="tx_home_nav">HOME</h3>
                           <h3 id="of" class="tx_home_nav">OFFER</h3>
            <h3 id="ct" class="tx_home_nav">CART</h3>
            <h3 id="pv" class="tx_home_nav">RULES</h3>
            <h3 id="hp" class="tx_home_nav">HELP</h3>
            <h3 id="bc" class="tx_home_hide">BACK</h3>
          
        
        </div>
            

        </div>
       
        <div id="shback" class="in_sh" >
                <div class="sh_back">
                    

                </div>
                <div class="sh_area">
                        <div class="area_intxt">
                                <h1 class="tx_insh">4USHOP</h1>
                                
                        </div>
                        <div class="area_txt">
                        <h2 class="tx_inshsm">The best computer store</h2>
                        </div>
                        <div class="area_butts">
                            <button type="submit" class="dwbut" id="godw"><h2 class="lkaro"><a id="lk"  href="#products">Look around</a></h2></button>
                        </div>

                </div>

            

        </div>
        <div class="in_info" id="products">

                <h1 class="tx_info">PRODUCTS</h1>

        </div>
      
        <div class="in_item">
        <script src="javascript/buy.js" type="text/javascript"></script>
                    <div class="in_sellback">
                        <div class="sl_sell">
               

                           
                            <div class="sl_pro" id="pr1"><div class="pr_img" id="impr1"></div><h2 class="pr_desc" id="desp1"  onclick="Buy(this.id)">Gaming PC: GTX1650 SUPER ,I5 10TH,16GB RAM,500GB HD</h2></div>
                            <div class="sl_pro" id="pr2"><div class="pr_img" id="impr2"></div><h2 class="pr_desc" id="desp2" onclick="Buy(this.id)">Unkown</h2></div>
                            <div class="sl_pro" id="pr3"><div class="pr_img" id="impr3"></div><h2 class="pr_desc" id="desp3" onclick="Buy(this.id)">-</h2></div>
                       
                    
                        </div>
                        
                        <div class="sl_sell">
                            <div class="sl_pro" id="pr4"><div class="pr_img" id="impr4"></div><h2 class="pr_desc" id="desp4" onclick="Buy(this.id)">-</h2></div>
                            <div class="sl_pro" id="pr5"><div class="pr_img" id="impr5"></div><h2 class="pr_desc" id="desp5">-</h2></div>
                            <div class="sl_pro" id="pr6"><div class="pr_img" id="impr6"></div><h2 class="pr_desc" id="desp6">-</h2></div>
                        </div>
                        <div class="sl_sell">
                            <div class="sl_pro" id="pr7"><div class="pr_img" id="impr7"></div><h2 class="pr_desc" id="desp7">-</h2></div>
                            <div class="sl_pro" id="pr8"><div class="pr_img" id="impr8"></div><h2 class="pr_desc" id="desp8">-</h2></div>
                            <div class="sl_pro" id="pr9"><div class="pr_img" id="impr9"></div><h2 class="pr_desc" id="desp9">-</h2></div>
                        </div>

                    </div>
            
        </div>
        <div class="in_end">
           
            <div class="in_dev">
                <h2 class="end_intr">CREDITS</h2>
                <h4 class="end_cr">Creator: Natrexq</h4>
                <h4 class="end_cr">Coder: Natrexq</h4>
                <h4 class="end_cr">Picture: My own or free img</h4>
               


            </div>
            <div class="in_ath">
                <h5 class="tx_dev">
                <h2 class="end_intr">PROJECT</h2>
                <h4 class="end_cr" ><b><i>Look at Project on GitHub</i></b></h4>
                <h4 class="end_cr" id="gtcr" onclick="window.open('https://github.com/Natrexq/4UShop-Template-of-shop-JS-PHP-');">(*click it*)</h4>

                </h5>

            </div>
            <div class="in_cre">
                <h5 class="tx_dev">
                <h2 class="end_intr">CONTACT</h2>
                <h4 class="end_cr">Email: unkown@domain.com</h4>

                </h5>

            </div>
        </div>


    




    </body>

</html>