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
