// ---------- Conways GoL ------------------------------

function ToF() {
    if (Math.random() > 0.8) {
        return 0;
    } else {
        return 1;
    }
};
function colorConsArray(array,x,y,w,h) {
    for (let i=0; i<array.length;i++) {
        // let c = color(Math.random()*255, Math.random()*255, Math.random()*255, Math.random()*255) // colors
        // let c = color(Math.random()*array[i]*255,Math.random()*array[i]*255,Math.random()*array[i]*255);  //black and grayscale
        let c = color(Math.random()*array[i]*255,);  //black and grayscale
        // let c = color(array[i]*255); // black/white
        // let c = color(array[i]*255*Math.random()*10,array[i]*255*255); // blizzard
        fill(c);
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
    // -x-1 | -x | -x+1 
    //  -1  | ** |  +1
    // +x-1 | +x | +x+1
    let sumd=[
            array[index-ws-1],
            array[index-ws],
            array[index-ws+1],
            array[index-1],
            array[index+1],
            array[index+ws-1],
            array[index+ws],
            array[index+ws+1],
        ].reduce((a,b) => a+b,0);
        if (value > 0) {
            // dead cell
            if (sumd == 3) {
                return 1
            } else {
                return 0
            }
        } else {
            // live cell
            if (!(sumd == 2 | sumd == 3)) {
                return 0
            } else {
                return 1
            }
        }
        // return sumd;
}  

function innitArray() {

    rpentomino = math.matrix([
        [0,1,1],
        [1,1,0],
        [0,1,0],

        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        // [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
        // [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],

    ]);

    // console.log(xs);
    // console.log(ys);
    // console.log(rpentomino.resize([xs, ys]));
    // console.log(rpentomino.size());
    return math.flatten(rpentomino.resize([xs, ys]));
}

// setup and draw -------------
let w,h,x,y, ol; // ol is outerlengyh
let xs, ys,tot_sqrs,ws, consarr;
function setup() {
    canvasFitter();

    // w=Math.max(height,width)*10/Math.min(height,width);
    // square's width
    w=Math.max(height,width)/Math.min(height,width)*6;
    h=w; // squares height, = width
    x=-w; // starting x
    y=x; // starting y
    ol=3; // extra w to add to col/row calc (how many hori/vert squares)
    xs=Math.floor((width+ol*w)/w); // how many tot horizontal squares
    ys=Math.floor((height+ol*h)/h); // how many tot vertical squares 
    tot_sqrs=xs*ys; // game area
    ws=tot_sqrs/ys; // same as xs, input to nextGen
    consarr=Array.from({length: tot_sqrs}, () => ToF());
    // consarr=innitArray()._data;
    // console.log(innitArray()._data)
    // console.log(consarr);
    colorConsArray(consarr,x,y,w,h);
    // innitArray();
}

function draw() {
    noStroke();
    // noLoop();
    // frameRate(5);
    consarr=consarr.map(nextGen);
    colorConsArray(consarr,x,y,w,h);
}


function mouseClicked() {
    setup();
    // draw();
}


function windowResized() {
    setup();
    draw();
}
