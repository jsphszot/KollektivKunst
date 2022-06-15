// https://10print.org/
p5.disableFriendlyErrors = true; // disables FES

function setup() {
    canvasFitter();
    background(0);
}
function windowResized() {
    setup();
    draw();
}

function draw() {
    tenprint();
}



let x = 0;
let y = 0;
let sqlen = 20;
function tenprint(randomized=true){
    // frameRate(1000);
    let totsquares = Math.floor(height*width/(sqlen*sqlen))
    // console.log('hola' + totsquares);
    let hsq = Math.ceil(width/sqlen);
    let vsq = Math.ceil(height/sqlen);
    strokeWeight(10);
    stroke(Math.random()*255,Math.random()*255,Math.random()*255);
    if (Math.random() < 0.5) {
        // stroke(255);
        line(x+0,y+0,x+sqlen,y+sqlen);
    } else {
        // line(sqlen,0,0,sqlen)
        // stroke(255,0,0);
        line(x+0,y+sqlen,x+sqlen,y+0);
    }
    if (randomized){
        x = Math.floor(Math.random()*hsq)*sqlen;
        y = Math.floor(Math.random()*vsq)*sqlen;
    } else {
        if (x<width){
            x+=sqlen;
        } else if (y>height) {
            // background(0);
            x=0;
            y=0;
        } else {
            x=0;
            y+=sqlen;
            // console.log(y);
            // console.log(height);
        }
    }
}