let score = 0;
let state = 'start';
let duration = 30;
let startTime;

let ghost = { 
  x:240,
  y:180 
};


function setup(){
  createCanvas(480, 360);
  startTime = millis();

}
 
function draw(){
  background("#3B3153");
  noStroke();

  let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, duration - elapsed);

  ghost.x += random(-3,3);
  ghost.y += random(-3,3);

  drawGhost(ghost.x,ghost.y);

  fill(40, 30, 50);  //light-purple
  rect(0, 300, 480, 60);

  fill(255);
  textSize(22);
  text('Score: ' + score, 90, 20);
  textFont('Garamond (serif)')

  textAlign(RIGHT, TOP);
  text('Time: ' + ceil(timeLeft), width - 12, 10);

   if (state === 'start') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(22);
    text('Click to start\nCatch the Theif', width / 2, height / 2);
    return;
  }

  if (state === 'over') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(22);
    text('Game over\nScore: ' + score + '\nClick to retry', width / 2,   height / 2);
    return;
  }

  if (timeLeft <= 0) {
    state = 'over';
    return;
  }
   
  
}


function drawGhost(x,y){
  fill(0,0,0); //yellow
  ellipse(x, y, 60, 60);
  

  fill(255,255,255)
  ellipse(x-12, y-5, 10);
  ellipse(x+12, y-5, 10);

  fill(255,255,255);
  ellipse(200,400,70,70);

  
  
}

function mousePressed(){
  if (dist(mouseX,mouseY, ghost.x, ghost.y) < 30) {
    score +=1;

     if (state === 'start' || state === 'over') {
    state = 'play';
    score = 0;
    startTime = millis();
    drawGhost();
    return;
  }

    ghost.x += random(-80,80);
    ghost.y += random(-80,80);
    drawGhost(ghost.x,ghost.y);
  }
}
