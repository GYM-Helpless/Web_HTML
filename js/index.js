var device_height = 0;
var naviLayout = "";
var midLayout = "";
var naviDisStat = 1;
function load() {
    device_height = window.innerHeight;
    naviLayout = document.getElementById("navi_layout");
    midLayout = document.getElementById("mid_layout");
    naviLayout.style.height = device_height.toString() + "px";
    // midLayout.style.minheight = (device_height - 100).toString() + "px";

    // alert(device_height);
}

function naviDisplay() {
    naviLayout = document.getElementById("navi_layout");
    if (naviDisStat != 0) {
        naviDisStat = 0;
        naviLayout.className = "index_navi_layout_show";
    } else {
        naviLayout.className = "index_navi_layout";
        naviDisStat = 1;
    }

}