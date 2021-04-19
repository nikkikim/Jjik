function toggleMenu() {

    let x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    let m = document.getElementById("bars");
    if (m.src.endsWith("images/menu.png")) {
        m.src = "images/cross.png";
    } else {
        m.src = "images/menu.png";
    }

    let s = document.getElementById("bars2");
    if (s.src.endsWith("on.png")) {
        s.src = "off.png";
    } else {
        s.src = "on.png";
    }
}
var isMobile;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    isMobile = true;
    document.write("mobile device");
    console.log("mobile");
}else{
    // false for not mobile device
    isMobile = false;
    document.writeln("<div style='position:fixed;width:100%;height:100%;top:150px;left:0px;background-color:black;'><img style='width:50%;margin:0 auto;display:block;' src='ma.jpg'></div>");
    // window.stop();
}

window.onload = function (){
    if (isMobile){
        console.log("ismobile");
        if (document.getElementById('video2') != undefined){
            document.getElementById('video2').addEventListener('ended', videoHandler, false);

            // document.getElementById('video2').style.display = 'none';
            // document.getElementById('content2').style.display = 'block';
        } else {
            document.getElementById('content2').style.display = 'block';
            console.log("No video");
        }
    } else {
        document.getElementById('contents').style.display = 'none';
    }
};
function videoHandler(e) {
    // What you want to do after the event
    document.getElementById('content2').style.display = 'block';
    document.getElementById('video2').style.display = 'none';
}
