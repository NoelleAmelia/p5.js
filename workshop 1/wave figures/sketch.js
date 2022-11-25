let i = 5;
let col1;
let col2;
let col3;
let colours;

function setup() {
  createCanvas(568, 810);
  frameRate(30);
  col1 = color(18, 33, 147);
  col2 = color(228, 93, 47);
  col3 = color(212, 212, 212);
  colours = [col1, col2, col3];  // array mit Farben
}

function draw() {
  background(18,22,147,80);
  stroke(255);
  fill(random(colours));        // diese Fill wird auf den Kreis angewendet
  translate(width/2, height/2);
  push();
  for (let i = 0; i < 8; i++) { //schleife für die Zeilen
    for (let y = 0; y <10; y++) {  //Schleife für die Spalten
      fill(random(colours));    // diese Fill gilt für jedes Rechteck, sonst wären alle identisch random
        rect(i*40,y*50, 15, 15); 
        /* das Rectangle wird in i richtung (also auf der x Achse)
        15 mal gezeichnet, und in y (auch y achse) 18 mal.
        sie haben eine größe von 15*15
        Merke: Durch die Form der Loops wird erst
        die Spalte gezeichnet und dann die Zeile*/
        rotate(PI);
        /* was wird hier rotated? bei y< ungerade ist es versetzt
        bei y< gerade ist es nicht versetzt*/
    }
  }
  pop();
  
  let waveY = sin(radians(-frameCount))*500;
  let waveX = cos(radians(frameCount))*500;

push();
  for (let i = 0; i < 10; i++) {
      ellipse(waveX*0.3, waveY*0.3, 10, 10);    
      ellipse(waveX*0.3, waveY*0.3, 10, 10);
  }


  pop();
}  
