// import {canvasFitter} from "/setCanvas.js"


// Learning https://p5js.org/examples/

function drawCircles() {
    if (mouseIsPressed){
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
function coordinatesExample() {
    background(0);
    noFill();
    // point(x,y)
    stroke(255);
    point(width * 0.5, height * 0.5);
    point(width * 0.5, height * 0.25);
    // line(x1,y1,x2,y2)
    stroke(0,153,255);
    line(0, height/3, width, height/3);
    // rect(x upper-left, y upper-left, width, height)
    stroke(255, 153, 0);
    rect(width*0.25, height*0.1, width*0.5, height*0.8);
}
function width_and_height() {
    background(127);
    noStroke();
    for (let i=0; i<Math.max(width, height); i+=20) {
        let blibli=16; // height of green horizontal lines, width of white
        fill(0);
        rect(0,i,width,blibli);
        fill(255); // white fill
        rect(i,0,blibli,height);
    }
}

// ---------- moving horizontal line -----------------------
// has to be defined outside of function to initialize
let yay=100;
function setup_and_draw() {
    // code inside: 
    // draw() function runs continuously top-bottom until program is stopped
    // setup() is run once when the program starts
    stroke(255);
    background(0); //bgd to black
    // yay=yay-1;
    yay--;
    if (yay<0) {yay=height};
    line(0,yay,width,yay);
}

// ---------- shadow spheres -------------------------------
// bit slow reload (just noticeable), make j_circles smaller if needed
// https://p5js.org/examples/structure-functions.html 
let j_circles=500;
function draw_targets(pulse=true, the_one=false) {
    background(51)
    if (pulse) {
        // redraw();
        drawTarget(width*0.25, height*0.4, 200);
        drawTarget(width*0.50, height*0.5, 300);
        drawTarget(width*0.75, height*0.3, 120);
    } else {
        noLoop();
        if (the_one) {
            drawTarget(width*Math.random(), height*Math.random(), Math.max(width, height)*5)
        } else {
            for (let j=0; j<j_circles; j++) {
                drawTarget(width*Math.random(), height*Math.random(), Math.max(width, height)*Math.random()*0.2)
            }
        }
    }
}
let grayvalues=255;
let graylim=255;
function drawTarget(xloc, yloc, size, num=size/7) {
    if (grayvalues<-graylim){grayvalues=graylim}
    grayvalues-=0.4;
    // const steps=size/num;
    for (let i=0; i<num; i++) {
        fill(i*Math.abs(grayvalues)/num);
        ellipse(xloc, yloc, size*(num-i)/num); //size-i*steps); 
    }
}
 
// ---------- shadow spheres -------------------------------
// https://p5js.org/examples/structure-create-graphics.html
let pg;
function fading_ball() {
    fill(0, 12);
    rect(0, 0, width, height);
    fill(255);
    noStroke();
    ellipse(mouseX, mouseY, 60, 60);
  
  //   pg.background(51);
  //   pg.noFill();
  //   pg.stroke(255);
  //   pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);
  
    //Draw the offscreen buffer to the screen with image()
  //   image(pg, 150, 75);
  }
// ---------- hori vert lines ------------------------------
function hori_vert_lines() {
    noLoop();
    background(0);
    stroke(255);
    
    let d = 20;
    let middle = width / 2;
    let i = d;
    let j = d;
      // Vertical line
    while (i < middle) {
        line(i, d, i, height - d);
        i += d;
    }
    // Horizontal line
    while (j < height) {
        // line(x1,y1,x2,y2)
        // cool diagonals coming from one point
        // line(middle, height -j - d, width - d, height- 50 - d);
        
        line(middle, height-j, width-d, height-j);
        j += d;
    }
}

function diag_lines() {
    noLoop();
    background(0);
    stroke(255);
    
    let d = 20;
    let middle = width / 2;
    let i = d;
    let j = d;
      // Vertical line
    while (i < middle) {
        line(middle, d, i, width-d);
        i += d;
    }
    // Horizontal line
    while (j < height) {
        // line(x1,y1,x2,y2)
        // cool diagonals coming from one point
        // line(middle, height -j - d, width - d, height- 50 - d);
        line(d, j, width-d, j);
        
        j += d;
    }
}

// ---------- Recursion ------------------------------
// https://p5js.org/examples/structure-recursion.html
function recursiverecursion() {
    noStroke();
    background(120,12)
    noLoop(); // also makes rendering less pixeled

    recursiveCircle(width/2, 280, 6);
}
function recursiveCircle(x, radius, level) {
    // 'level' is the variable that terminates the recursion once it reaches 
    // a certain value (here, 1). If a terminating condition is not 
    // specified, a recursive function keeps calling itself again and again
    // until it runs out of stack space - not a favourable outcome! 
    const tt = (126*level) / 4.0;
    fill(tt);
    ellipse(x, height /2, radius*2, radius*2);
    if (level>1) {
        level -= 1;
        recursiveCircle(x-radius/2, radius/2, level);
        recursiveCircle(x+radius/2, radius/2, level);
    }
}

// ---------- Conways GoL ------------------------------
function conwaysGoL() {
    // noLoop();
    noStroke();
    frameRate(20)

    let w,h,x,y;
    w=Math.max(height,width)*10/Math.min(height,width);
    h=w;
    x=-w;
    y=x;
    
    console.log(width);
    console.log(height);
    
    let xs=((width+2*w)/w);
    let ys=((height+2*h)/h);
    let tot_sqrs=Math.ceil(xs*ys);
    console.log(tot_sqrs);

    let consarr=Array.from({length: tot_sqrs}, () => ToF());
    colorConsArray(consarr,x,y,w,h);
    
    // for (let i=0;i<100;i++){
    //     consarr=consarr.map(nextGen);
    //     colorConsArray(consarr,x,y,w,h);
    //     background(255);
    // }

}
function ToF() {
    if (Math.random() > 0.5) {
        return 0;
    } else {
        return 1;
    }
};
function colorConsArray(array,x,y,w,h) {
    let hovercolor=false;
    for (let i=0; i<array.length;i++) {
        // let c = color(Math.random()*255, Math.random()*255, Math.random()*255, Math.random()*255) // colors
        let c = color(array[i]*255); // black/white
        // let c = color(array[i]*255*Math.random()*10,array[i]*255*255); // blizzard

        fill(c); // black/white
        if ((x<mouseX && mouseX<x+w*2) && (y<mouseY && mouseY<y+h*2) && hovercolor) {
         fill(255,153,255)   
        }
            rect(x,y,w,h);
            if (x>width) {
                x=0;
                y+=h;
            } else {
                x+=w;
            }
        // y++;
    }
}

function nextGen(value, index, array){
    let sumd=[
            array[index-xs-1],
            array[index-xs],
            array[index-xs+1],
            array[index-1],
            array[index+1],
            array[index+xs-1],
            array[index+xs],
            array[index+xs+1],
        ].reduce((a,b) => a+b,0);
        if (value > 0) {
            // dead cell
            if (sumd == 3) {return 1} else {return 0}
        } else {
            // live cell
            if (!(sumd == 2 | sumd == 3)) {
                return 0
            } else {
                return 1
            }
        }
}  

// -x-1 | -x | -x+1 
//  -1  | ** |  +1
// +x-1 | +x | +x+1



// setup and draw -------------

function draw() {
    // drawCircles();
    // coordinatesExample();
    // width_and_height();
    // setup_and_draw();  
    // draw_targets(); // run together with fading ball, don't know why but it "smooths out" the balls jejeje
    // fading_ball();
    // diag_lines();
    // hori_vert_lines();
    // recursiverecursion();
    conwaysGoL();

}

function setup() {
    // frameRate(1);
    // noLoop(); // stops draw from re-running, can combine with redraw() for funstuff
    canvasFitter();
}

function windowResized() {
    setup();
    draw();
}
