
// https://www.youtube.com/watch?v=ZI1dmHv3MeM
// https://necessarydisorder.wordpress.com/
// https://github.com/Bleuje
// https://bleuje.github.io/animationsite/2022_1/

p5.disableFriendlyErrors = true; // disables FES

let bckg_alpha = 50;

let rad = 0.5;
let nperiod = 7.0;
let freq = 4;
let xamp = 200;
let yamp = 90;

let w_mult=2.5;
let shapes = 5;

// let tl = 0;
// let tc = 0;

let tc_array = Array(3).fill().map(()=> 0);
// console.log(tc_array)

function setup() {
    canvasFitter();
    // slider = createSlider(0, 10, 0, 0.1)
}
function windowResized() {
    setup();
    draw();
}
function draw() {
        // smokeyLines(lines);
        // smokeyCircle();
        smokeyShapes(shapes)
}

function smokeyShapes(shapes) {
    clear();
    // smokeyLine();
    smokeyCircle(0,sw=1, 50, r_adj=1.2, tc_inc=0.2);
    smokeyCircle(1,sw=1.5, 100, r_adj=0.8, tc_inc=-0.1);
    smokeyCircle(2,sw=2, 100, r_adj=0.5 , tc_inc=0.1);
    // halfline();

}

function smokeyLine(y=height/2, seed=100, tl_inc=-0.015) {

    // clear();
    // background([[0]*3, bckg_alpha]);
    noFill();
    stroke(255, bckg_alpha); // white
    let m = width*w_mult;
    for (let i=0; i<=m; i+=1) {
        let p = 1.0*i/m;
        let x = map(p*(width), 0,width, -xamp, width+xamp);
        let noise_x = rad*cos(TWO_PI*(nperiod*p+tl));
        let noise_y = rad*sin(TWO_PI*(nperiod*p+tl));
        let dx = xamp*noise(seed+noise_x, noise_y, freq*p);
        // let dy = amp*noise(2*seed+noise_x, noise_y, freq*p);
        let dy = yamp*noise(2*seed+noise_x, noise_y, freq*p)-yamp/2;
        // console.log(y)
        // vertex(x,y)
        point(x+dx, y+dy);

    }
    // endShape();
    
    // use for testing where half is 
    // halfline();

    tl += tl_inc;

}

function smokeyCircle(z, sw,seed, r_adj, tc_inc=-0.1, x0=width/2, y0=height/2) {

    // clear();
    // background([[0]*3, bckg_alpha]);
    noFill();
    stroke(255, bckg_alpha); // white
    strokeWeight(sw);
    // translate(width/2, height/2);
    // let m = width*w_mult;
    let pi_splits = TWO_PI/(15000);
    let r = 0.5*Math.min(width, height)*r_adj;
    let tc = tc_array[z];
    // beginShape();
    for (let a=0; a<=TWO_PI*1.05; a+=pi_splits) {
        let p = a;
        // let x = map(p*(width), 0,width, -xamp, width+xamp)*cos(a);
        let noise_x = rad*cos(TWO_PI*(nperiod*p+tc));
        let noise_y = rad*sin(TWO_PI*(nperiod*p+tc));
        let dx = xamp*(noise(seed+noise_x, noise_y, freq*p)-1/2);
        let dy = yamp*(noise(2*seed+noise_x, noise_y, freq*p)-1/2);
        let x = r*cos(a)+dx;
        let y = r*sin(a)+dy;
        point(x0+x, y0+y);
        // curveVertex(x0+x, y0+y);

    }
    // endShape(CLOSE)
    // tc += tc_inc;
    tc_array[z] += tc_inc;

}


function halfline() {
    stroke(255);
    line(0, height/2, width, height/2);
}