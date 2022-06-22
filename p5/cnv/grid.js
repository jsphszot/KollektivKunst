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
}


function gridLines(sense=1) {
    var xstart=xpad;
    var xend=width-xpad;
    var ystart=ypad;
    var yend=height-ypad;
    
    
    background(0);
    stroke(255);
    strokeWeight(1);

    // divcat=Math.random()*50;
    divcatx=5;
    divcaty=5;
    for (let i=0; i<2000; i+=1){
        translate(width/divcatx, height);
        rotate(sense*rotx);
        // line(xstart,ystart, xend, yend);
        line(0,0, width, height);
    }
    rotx += 0.008;
    console.log(rotx)
}

