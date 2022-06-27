p5.disableFriendlyErrors = true; // disables FES

var ypad;
var xpad;
let yoffstart = 0;

var rotx = 0;

function setup() {
    canvasFitter();
    ypad = Math.min(height, width)*0.3; 
    xpad = ypad;
    frameRate(700);
    rectMode(CENTER);
}
function windowResized() {
    setup();
    draw();
}
function draw() {
    shapes();
}


function cross_fill(i,j){
    rect(i*100,j*100, 100,100);
    rect(i*100,-j*100, 100,100);
    rect(-i*100,-j*100, 100,100);
    rect(-i*100,j*100, 100,100);
}
function board(i,j, sq_side){
    // var canvas_area_squared = Math.floor(Math.sqrt(width*height));
    // var sq_side = canvas_area_squared/100;
    rect(i*sq_side,j*sq_side, sq_side,sq_side)
    rect(-i*sq_side,j*sq_side, sq_side,sq_side)
    rect(-i*sq_side,-j*sq_side, sq_side,sq_side)
    rect(i*sq_side,-j*sq_side, sq_side,sq_side)
}

function circboard(i,j){
    var canvas_area_squared = Math.floor(Math.sqrt(width*height));
    var sq_side = canvas_area_squared/5;
    // x,y, diameter
    circle(i*sq_side,j*sq_side, sq_side)
    circle(-i*sq_side,j*sq_side, sq_side)
    circle(-i*sq_side,-j*sq_side, sq_side)
    circle(i*sq_side,-j*sq_side, sq_side)
}
function shapes() {

    background([[0]*3, 10]);
    // stroke(255);
    noStroke();
    // stroke(255);
    // strokeWeight(5);
    //move the shape to the center of the canvas
    // translate(mouseX, mouseY);
    translate(width/2, height/2);
    
    var canvas_area_squared = Math.floor(Math.sqrt(width*height));
    var sq_side = canvas_area_squared/5;
    var ijmax = Math.max(width/sq_side, height/sq_side)*1.0;
    // rotate((Math.random() > 0.97 ? 1 : -1)*rotx);
    rotate(-rotx);
    // rect(0,0, 100,100);
    for (let i=1; i<ijmax; i+=1) {
        for (let j=1; j<ijmax;j+=1){
            let sq_color = 
            fill([[255*(j%2)*(i%2)]*3, 200**(j%2)*(i%2)]);
            // cross_fill(i,j);
            board(i,j, sq_side);
            // circboard(i,j);
        }
    }
    
    rotx+=0.02;

}

