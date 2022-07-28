function windSize() {
    // get navbar height to include in canvas H calc
    var navH = document.getElementById("navbar").clientHeight;
    var mqBH = document.getElementById("marquee-bottom").clientHeight;
    // // // get and return client W and H
    var windW = document.documentElement.clientWidth;
    var windH = document.documentElement.clientHeight-(navH+mqBH);
    return [windW, windH]
};
function canvasFitter(){
    var wh = windSize()
    let cnv=createCanvas(wh[0], wh[1]);
    cnv.id('canvas');
    // correct p5.js inserted <main> to not be bigger than body
    var main = document.querySelector('main');
    main.style.width=wh[0]+'px';
    main.style.height=wh[1]+'px';
};

// load random file
let rf_script = document.createElement("script");
const script_list = [
//     "cnv/10PRINT.js",
//     "cnv/sketch.js",
    "cnv/cgol.js",
//     "cnv/floxk.js",
//     "cnv/video.js",
    "cnv/PlaceresDesconocides.js",
    "cnv/unknownpleasures.js",
    "cnv/rotatingline.js",
    "cnv/blueje.js",
//     "cnv/smokeyImage.js",
//     "cnv/grid.js",
//     "cnv/kaleidoscope.js",
];
function random_item(items) {
    // https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
    return items[Math.floor(Math.random()*items.length)];
}
var script_path = random_item(script_list);
rf_script.setAttribute("src", script_path);
document.body.appendChild(rf_script);
