let col1;
let col2;
let col3;
let colours;

function setup() {
  createCanvas(568, 810);
  frameRate(3);
  rectMode(CORNER);
  ellipseMode(CENTER);
  col1 = color(18, 33, 147);
  col2 = color(228, 93, 47);
  col3 = color(212, 212, 212);
  colours = [col1, col2, col3];  // array mit Farben
}

function draw() {
  background(col2);
  strokeWeight(2);
  //noLoop();
  let   waveX = sin(frameCount); // muss in der Draw Function deklariert werden
  let   waveY = cos(frameCount)*200;
  for (let i = 0; i < 4; i++) {
    for (let y = 0; y < 6; y++) {
      fill(col3);
      rect((i*10)+130*i, (y*10)+130*y, width/4, height/5); 
      for( let a = 0; a < 4; a++) {
        for(let b = 0; b < 8; b++){
          fill(random(colours));
          ellipse(((a*width/4)+width/8), ((b*height/6)+height/11)*waveX, mouseX, mouseY);
          /* der erste Parameter setzt die ellipse in den center der Rects
          die X koordinate wird auf width durch 4 gesetzt, das ware aber 
          dann am Anfang 0. Daher addieren wir nicht width durch 4, sonst
          landet es auf der rechten Linie der Vierecks. 
          Die goldene Mitte ist bei width durch 8.
          */
        }
         
      }
    }
  }

}  
