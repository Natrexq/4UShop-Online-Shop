<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>4UShop - Get Help</title>
        
        
        <script type="text/javascript">var info = "<?= $info ?>";</script>
        <script src="javascript/main.js" type="text/javascript"></script>
    </head>
    <body>
        
        <script src="javascript/report.js" type="text/javascript" ></script>
     
        <link rel="stylesheet" href="css/help.css">
    
        

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
                    <h1 class="cartcount"></h1>
            </div>

             <h3 class="tx_home_nav" onclick="BackHome()">BACK</h3>

            <h3 class="tx_home_nav">PRIVACY</h3>

          
        
        </div>
            

        </div>
       
        <div id="shback" class="in_sh" >
                <div class="sh_back">
                    

                </div>
                <div class="sh_area">
                        <div class="area_intxt">
                                <h1 class="tx_insh">Get Help</h1>
                                
                        </div>
                        <div class="area_txt">
                        <h2 class="tx_inshsm">How we can help you?</h2>
                        </div>
                        <div class="area_backbuts">
                            <div class="area_butts">
                            <button type="submit" class="dwbut" id="godw"><h2 class="lkaro"><a id="lk"  href="#report_page">Report Problem</a></h2></button>
                            <button type="submit" class="dwbut" id="godw"><h2 class="lkaro"><a id="lk"  href="#contact_page">Contact with us</a></h2></button>
                        </div>
                            

                        </div>
                        
                       <div id="report_page">report</div>
                    </div>


               
                
            

        </div>


        <div class="hl_report">
            
                <div class="report_dv">
                    <div class="dv_rep_tip">
                        
                        <h2 class="tx_tipbig" id="okej">Report</h2>
                    </div>   
                    <h2 class="tx_tipsmall">Describe your problem</h2>
                    <div class="dv_repinptx">

                        <input placeholder="For example:  'I can't see availability status of product '" translate="no" type="text" name="" maxlength="70" id="wrtrepo" class="inp_wrt_report">
                    </div>
                  
                    <div class="report_controls">

                        
                        <div class="inptx_counter" id="valcnt">
                                            <h2 class="cnt_val" id="count">1</h2>
                        </div>
                       
                        <button id="sndrepo" type="submit" class="but_snd_report">
                            <h2  class="tx_but_sdrp">Send Report</h2>
                               </button>

                    </div>
                 
                </div>
           

        </div>

    
        <div class="hl_contact"  id="contact_page">

                <div class="contact_mail">

                </div>
                <div class="contact_socials">

                </div>
                <div class="contact_other">

                </div>
                


        </div>
  
      
        
        <div class="in_end">
           
          
        </div>

    
    
    
    
    
    
    </body>


</html>