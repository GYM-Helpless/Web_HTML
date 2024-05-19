var web_height = 0;
var web_width = 0;

function load() {
    web_height = window.innerHeight;
    web_width = window.innerWidth;
    var webOuterLo = document.getElementById("webOuterLo");
    webOuterLo.style.width = web_width.toString() + "px"
    
    var head_describes = document.getElementById("headDescLo");
    var head_navi = document.getElementById("headNaviLo");
    var web_width_part = web_width - 100;
    var head_describes_width = parseInt(web_width_part * 0.39);
    var head_navi_width = parseInt(web_width_part - head_describes_width-5);
    head_describes.style.width =  head_describes_width.toString()+"px";
    head_navi.style.width = head_navi_width.toString() + "px";
    
    var anmMidOutLo = document.getElementById("anmMidOutLo");
    var anmMIdOutLoHeight = web_height - 110;
    anmMidOutLo.style.height = anmMIdOutLoHeight.toString() + "px";

    var anmMidOutImg = document.getElementById("anmMidOutImg");
    var anmMidOutImgHeight = parseInt(anmMIdOutLoHeight * (1 / 4));
    anmMidOutImg.style.marginTop = anmMidOutImgHeight.toString() + "px";



}