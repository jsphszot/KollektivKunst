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
        let c = color(array[i]*255); // black/white
        // let c = color(array[i]*255*Math.random()*10,array[i]*255*255); // blizzard

        fill(c);
        // if (ToF()==0) {
        //     // fill(255,153,255)   
        //     fill(c); // black/white
        // } else {
        //     fill(255)
        // }
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


// setup and draw -------------
let w,h,x,y, ol; // ol is outerlengyh
let xs, ys,tot_sqrs,ws, consarr;
function setup() {
    canvasFitter();

    // w=Math.max(height,width)*10/Math.min(height,width);
    w=Math.max(height,width)/Math.min(height,width)*6;
    h=w;
    x=-w;
    y=x;
    ol=3;
    xs=Math.floor((width+ol*w)/w);
    ys=Math.floor((height+ol*h)/h);
    tot_sqrs=xs*ys;
    ws=tot_sqrs/ys;
    consarr=Array.from({length: tot_sqrs}, () => ToF());
    colorConsArray(consarr,x,y,w,h);
}


function draw() {
    noStroke();
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
