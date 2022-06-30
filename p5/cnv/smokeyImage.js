// idea is to input szot dog logo, 
// and add perlin noise smokey effect to it

p5.disableFriendlyErrors = true; // disables FES

let density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let startIndex = 0;
// preload
let img;

let bckg_alpha = 200;
let nz_inc = 0;

let rad = 0.5;
let nperiod = 7.0;
let freq = 4;
let xamp = 200;
let yamp = 350;
let seed = 100;

function preload() {
    let path = './img/SZOTDOG_tiny.png';
    img = loadImage(path);
}

function setup() {
    canvasFitter();
    // noCanvas();
    drawingLoop();
}

function windowResized(){
    setup();
    draw();
}


function draw() {
    drawingLoop();
}



// // // // drawing logic
function drawingLoop() {
    // image(img, 0,0, width, height);
    getImgPixels(img);
}
function getImgPixels(img) {
    background(0);
    // let w = 0.9*width/img.width;
    // let h = 0.9*width/img.height;
    let poscontrol = 1.0;
    let w = poscontrol*width/img.width;
    let h = poscontrol*height/img.height;
    let xstartdraw = width*(1-poscontrol)/2;
    let ystartdraw = height*(1-poscontrol)/2;
    img.loadPixels();
    for (let j=0; j<img.height; j++) {
        // let row = '';
        for (let i=0; i<img.width; i++) {
            const pixelIndex = (i +j*img.width)*4;
            const r = img.pixels[pixelIndex+0];
            const g = img.pixels[pixelIndex+1];
            const b = img.pixels[pixelIndex+2];
            const avg = (r + g + b) / 3;

            // noStroke();
            // //square(i * w, j * h, w);
            
            // fill(255);
            // stroke(avg);
            stroke(avg);

            let p = 1.0*i/img.width;
            // let x = map(p*(width), 0,width, -xamp, width+xamp);
            let noise_x = rad*cos(TWO_PI*(nperiod*p+nz_inc));
            let noise_y = rad*sin(TWO_PI*(nperiod*p+nz_inc));
            let dx = xamp*noise(seed+noise_x, noise_y, freq*p);
            // let dy = amp*noise(2*seed+noise_x, noise_y, freq*p);
            let dy = yamp*noise(2*seed+noise_x, noise_y, freq*p)-yamp/2;

            // drawAsText(avg, w, h, i, j);
            // let noisex = 100*noise(nz_inc+i, j);
            // let noisey = 100*noise(nz_inc+j, i);

            let xpos = xstartdraw+(i*w+w*0.5)+dx/4;
            let ypos = ystartdraw+(j*h+h*0.5)+dy/4;

            point(xpos, ypos);

            // const c = density.charAt(charIndex);
            // if (c=='') row +='&nbsp;'
            // else row += c;
            // row += density.charAt(charIndex);
            // startIndex++;
            
            
        }
        // createDiv(row);
        // console.log(row);
    }
    nz_inc += 0.01;
}

function drawAsText(avg, w, h, i, j) {
    const len = density.length;
    const charIndex = floor(map(avg,0,255,len,0));
    textSize(w);
    textAlign(CENTER, CENTER);
    // use xy startdraw to center image drawing
    let xstartdraw = width/4;
    let ystartdraw = height/4;
    text(density.charAt((charIndex)), xstartdraw+(i*w+w*0.5), ystartdraw+(j*h+h*0.5));

}