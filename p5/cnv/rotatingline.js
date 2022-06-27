p5.disableFriendlyErrors = true; // disables FES

var ypad;
var xpad;
let yoffstart = 0;

var rotx = 0;
var divcatx;
var divcaty;

function setup() {
    canvasFitter();
    ypad = Math.min(height, width)*0.3; 
    xpad = ypad;
    // frameRate(10);
}
function windowResized() {
    setup();
    draw();
}
function draw() {
    // noLoop()
    
    gridLines();
    gridLines(sense=-1);

    // gridLines(xstrt=width, ystrt=height);
    // gridLines(sense=-1, xstrt=width, ystrt=height);
}


function gridLines(sense=1, xstrt=0, ystrt=0) {
    var xstart=xpad;
    var xend=width-xpad;
    var ystart=ypad;
    var yend=height-ypad;
    
    // play with background
    background(0);

    // stroke(255);
    
    stroke(Math.random()*255, Math.random()*255, Math.random()*255);
    // fill(Math.random()*255, Math.random()*255, Math.random()*255);
    // // [Math.random()*255,Math.random()*60,Math.random()*255, Math.random()*150]) // flor de jamaica
    // stroke([Math.random()*255,Math.random()*60,Math.random()*255]); //, Math.random()*150]) // flor de jamaica);
    strokeWeight(0.5);

    // divcat=Math.random()*50;
    divcatx=5;
    divcaty=5;
    for (let i=0; i<2000; i+=1){
        translate(width/divcatx, height);
        rotate(sense*rotx);
        // line(xstart,ystart, xend, yend);
        line(xstrt,ystrt, width, height); // xstrt,ystrt use 0
        // rect(xstrt, ystrt, width/50, height/50);
    }
    rotx += 0.008;
    // console.log(rotx)
}

