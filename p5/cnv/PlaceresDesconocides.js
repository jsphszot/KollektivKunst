// PlaceresDesconocides
// with wave movement
// https://github.com/processing/p5.js/wiki/Optimizing-p5.js-Code-for-Performance
p5.disableFriendlyErrors = true; // disables FES

let yinc = 0.002; // y inncrement
let xinc = 0.01 // x increment
let yoffstart = 500000; // y offset start // not sure if this changes anything, just anchors noise
let lindiv = 10; // dist from edge to straight line // divides width in lindiv parts, setting one part to pad left and right
// var ypad = 170; 
// var xpad = 10;
var ypad;
var xpad;
var ydiff = 7;
let yamp = 90;
// var depth = 0;
// var ccclrs = colorSetter(100);
var ccclrs = colorSetter(500);

function setup() {
    canvasFitter();
    ypad = Math.max(height, width)*0.2; 
    xpad = 50;
}
function windowResized() {
    setup();
    draw();
}

function draw() {
    // noLoop()
    background(0);
    noisyLines();
    
    // frameRate(60);
    // frPrinter(); 
}

function frPrinter(){
    let fps = frameRate();
    fill(255);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 10, height - 10);

}

function noisyLine(xpad, ylevel, cccolor) {
    let xstart;
    let xend;

    let yoff;
    let y;
    
    // xpad = 30;
    xstart = xpad;
    xend = width-xpad;
    
    // let ylevel;
    // ylevel = height/2;

    yoff = yoffstart;

    beginShape();
    fill(cccolor)
    for (let x=xstart; x<=xend; x++) {

        // x // // // add some extra fuzz to the line
        // x // // let fuzz = noise(fuzzOffset + x / rowOffset + y) * fuzzMultiplier;
        // x // // // draw the line
        // x // // vertex(x + margin, height - vert - (height - y * ySpacing) + vertOffset + fuzz);
        // x // // //increment the angle for the sine wave.
        // x // // a = a + inc;
        
        // let d = 1-abs((x-width/2)/(width/2)); // just looks kinda funny at the center
        // let d = 1-noise(Math.sqrt(Math.sqrt(x)))
        // let d = 1-noise(PI*x/xend);
        

        // Moises divides
        let d = Math.sqrt(abs((x-width/2)/(width/2))); 
        // let d = Math.sqrt(abs((x-width/3)/(width/3))); 

        // flatten at edges
        if (x >= width/lindiv && x <= width-width/lindiv){
            y = ylevel-noise(yoff-ylevel)*yamp*d;
        } else {
            y = ylevel-noise(yoff-noise(ylevel));
        }
        // y = ylevel-noise(yoff-ylevel)*50;
        curveVertex(x, y);
        yoff += xinc;
    }
    endShape();
    yoffstart += yinc;
}

function noisyLines() {
    var ymax = height-ypad;
    fill(0);
    stroke(255);
    strokeWeight(2);
    
    for (let level=ypad; level<ymax; level+=ydiff) {
        // fill(cclrs);
        let cccolor = ccclrs[Math.floor((ymax-level)/ydiff)]
        noisyLine(xpad, level, cccolor);
    }
}
function colorSetter(howmany){
    var colorArray = [];
    for (let i = 0; i<howmany; i++) {
        colorArray.push([Math.random()*255,Math.random()*60,Math.random()*255, Math.random()*150]) // flor de jamaica
        // colorArray.push([Math.random()*255,Math.random()*255,Math.random()*255, Math.random()*150]) // gengibre
    }
    return colorArray;
}