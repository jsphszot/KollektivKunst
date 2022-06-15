// // unknown pleasures
// // based on https://editor.p5js.org/jarivkin/sketches/pvp0nbWJ
// // https://editor.p5js.org/amcc/sketches/YYdBcJGMg
// // https://www.youtube.com/watch?v=y7sgcFhk6ZM


function noisyLines(){
    var amp = 90; // 10 is small
    var xPad = 50;
    var yPad = 100;
    var yDiff = 7;
    var depth = 0;
    var xMax = width-xPad;
    var yMax = height-yPad;

    // var lines = (yMax)/yDiff-10;
    // var lines = 1;
    background(0);

    for (let level=yPad*1.3; level<yMax; level+=yDiff){   
        noisyLine(xPad, xMax, level, amp);
        // var wtg = plusorminus();
        // xPad+=wtg*depth;
        // xMax+=wtg*depth;
        xPad+=depth;
        xMax-=depth;
    }
}

function plusorminus(){
    if (Math.random() > 0.5) {
        return 1
    } else {
        return -1
    }
} 
// straight flowy lines
function flowyLine(start, end, level, amp){
    // var y_rescale = 100;
    var yoff = 0;
    beginShape();
    fill(0); // same as bg, otherwise fills spaes between f(x) and straight line startx->endx
    // noFill();
    stroke(255);
    strokeWeight(2);
    for (let x=start; x<end; x++){
        curveVertex(x, level+noise(yoff-level)*amp)
        yoff += 0.05;
    }
    endShape();
}


function noisyLine(start, end, level, amp){
    var yoff = 0;
    beginShape();
    // noFill();
    //white lines over black
    fill(0); // black fill
    stroke(255); // white lines
    // lines to chora mailaxia colors 
    stroke(Math.random()*255,Math.random()*60,Math.random()*255, Math.random()*150);
    strokeWeight(4); // between 1-5 looks good
    // chora mailaxia filled colors over black
    fill(Math.random()*255,Math.random()*60,Math.random()*255, Math.random()*150);
    // var wtg = plusorminus()
    for (let x=start; x<end; x++){
        var d = 1-abs((x-width/2)/(width/2));
        // console.log(d)
        // curveVertex(x, level+wtg*noise(yoff-level)*amp*d)
        // curveVertex(x, level+plusorminus()*noise(yoff-level)*amp*d)
        // curveVertex(x, level-noise(yoff)*amp*d) // same line repeated (same yoff)
        // curveVertex(x, level-noise(yoff-noise(level))*amp*d) // kinda similar lines (smaller diffs)
        if (x >= width/5 && x <= width-width/5){
            var y = level-noise(yoff-level)*amp*d;
        } else {
            y = level-noise(yoff-noise(level));
        }
        curveVertex(x, y) // same line repeated (same yoff)
        yoff += 0.01;
    }
    endShape();
    start += 0.01
}

function draw() {
    noLoop();
    // frameRate(10);
    noisyLines();
}

function setup() {
    canvasFitter();
}
function windowResized() {
    setup();
    draw();
}
