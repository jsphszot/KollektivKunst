// https://www.youtube.com/watch?v=ZI1dmHv3MeM

p5.disableFriendlyErrors = true; // disables FES

let pi_splits = Math.PI*2/100;

let noiseMax=5;
let noise_inc=0.2;

let min_r = 10;
let max_r = 400;

let phase=0;
let phase_inc = 0.007;

let offset_z = 0;
let offset_z_inc = 0.01;

// controls "fading" effect of drawing
let bckg_alpha = 10;


function setup() {
    canvasFitter();
    // slider = createSlider(0, 10, 0, 0.1)
}
function windowResized() {
    setup();
    draw();
}
function draw() {
        crazyCircle();
}



function crazyCircle(xpos=2, ypos=2) {
    // noiseSeed(50);
    // background(0);
    // clear();
    background([[0]*3, bckg_alpha]);
    translate(width/xpos, height/ypos);
    stroke(255);
    noFill();
    beginShape();
    // let noiseMax=slider.value();
    // console.log(pi_splits);
    // let max_r = Math.min(400, width);

    for (let a=0; a<TWO_PI; a+=pi_splits) {
        let offset_x = map(cos(a+phase), -1,1, 0,noiseMax);
        let offset_y = map(sin(a), -1,1, 0,noiseMax);
        let r = map(noise(offset_x,offset_y, offset_z), 0,1, min_r, Math.min(max_r, width*0.6));
        // let r = random(50, 100);
        let x = r*cos(a);
        let y = r*sin(a);
        // vertex(x,y);
        curveVertex(x,y);
        // noiseMax += noise_inc;
    }
    // endShape();
    endShape(CLOSE);
    // noLoop();
    phase += phase_inc;
    offset_z += offset_z_inc;
}

