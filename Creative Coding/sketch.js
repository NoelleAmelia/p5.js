let i = 5;
let col1;
let col2;
let col3;
let colours;
//let position = 0;

function setup() {
  createCanvas(568, 810);
  frameRate(2);
  background(18,22,147,80);
  col1 = color(18, 33, 147);
  col2 = color(228, 93, 47);
  col3 = color(212, 212, 212);
  colours = [col1, col2, col3];
}

function draw() {
  noLoop();
  stroke(255);
  rectMode(CENTER);
  fill(random(colours));
  for (let i = 0; i < 15; i++) { //schleife für die Zeilen
    for (let y = 0; y < 15; y++) {  //Schleife für die Spalten
      let a = i * 100;
      let b = y * 100;
      if ( a < 586 && b<810) { 
      fill(random(colours));
        rect(i*20,y*20, a, b);
      }
    }
  }
}
