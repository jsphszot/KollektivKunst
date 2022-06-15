// Daniel Shiffman
// https://youtu.be/rNqaw8LT2ZU
// http://thecodingtrain.com

var video;
var vScale = 15;

function setup() {
    // frameRate(1);
    canvasFitter();
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);
    video.hide();
}
function draw() {
  // twaek here for background (255 white, 0 Black)
    var bg = 0; // 
    background(bg);
    video.loadPixels();
    // fill(255-Math.random()*255, 255-Math.random()*255,255-Math.random()*255, 0.3);
    for (var y = 0; y < video.height; y++) {
      for (var x = 0; x < video.width; x++) {
        // var index = (x+(y*video.width))*4; // not mirroredd
        var index = (video.width-(x+1)+(y*video.width))*4; // mirrored
        var r = video.pixels[index+0];
        var g = video.pixels[index+1];
        var b = video.pixels[index+2];
        var bright = (r+g+b)/3;
        // https://p5js.org/reference/#/p5/map
        var w = map(bright,0,255,0,vScale);
        noStroke();
        
        // fill((255-bg)*Math.random());
        fill(255-Math.random()*255, 255-Math.random()*255,255-Math.random()*255);
        if (Math.random()>0.3)  {
          circle(x*vScale+x, y*vScale+y, w);
        } else {
          // rectMode(CENTER);
          rectMode(CORNER);
          rect(x*vScale+x, y*vScale+y, w, w);
        }
        // fill(bright);
        // rect(x*vScale+x, y*vScale+y, vScale, vScale);
        
      }
    }

    fill(255);
    // fill(255-Math.random()*255, 255-Math.random()*255,255-Math.random()*255, 0.3);


  
  }


function windowResized() {
    setup();
    draw();
}