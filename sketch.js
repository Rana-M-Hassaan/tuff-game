let score = 0;
let state = 'start';
let duration = 30;
let startTime;

let ghost = { 
  x:240,
  y:180 
};

let enemy = {
  x:120,
  y:180
};


function setup(){
  createCanvas(480, 360);
  startTime = millis();

}
 
function draw(){
  let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, duration - elapsed);
  
  let bgGradient = map(timeLeft, 0, duration, 10, 35);
  background(bgGradient - 5, bgGradient, bgGradient + 25);
  
  stroke(255, 255, 255, 10);
  strokeWeight(1);
  for (let i = 0; i < width; i += 40) {
    line(i, 0, i, 300);
  }
  for (let j = 0; j < 300; j += 40) {
    line(0, j, width, j);
  }
  noStroke();

  ghost.x += random(-3,3);
  ghost.y += random(-3,3);
  
  ghost.x = constrain(ghost.x, 30, width - 30);
  ghost.y = constrain(ghost.y, 30, 270);

  enemy.x += random(-4,4);
  enemy.y += random(-4,4);
  enemy.x = constrain(enemy.x, 30, width - 30);
  enemy.y = constrain(enemy.y, 30, 270);

  if (state === 'play') {
    drawGhost(ghost.x,ghost.y);
    drawEnemy(enemy.x,enemy.y);
  }

  fill(8, 10, 18);  
  rect(0, 300, 480, 60);
  fill(0, 240, 255);
  rect(0, 300, 480, 3);

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
    text('Click to start\nCatch the Thief\nAvoid the Red Enemy!', width / 2, height / 2);
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
  fill(15, 15, 25); 
  ellipse(x, y, 60, 60);
  
  fill(0, 240, 255); 
  ellipse(x-12, y-5, 12);
  ellipse(x+12, y-5, 12);
  
  fill(255);
  ellipse(x-12, y-5, 4);
  ellipse(x+12, y-5, 4);
}

function drawEnemy(x,y){
  fill(245, 60, 85);
  ellipse(x, y, 50, 50);
  
  fill(255, 235, 30);
  ellipse(x-10, y-4, 14, 8);
  ellipse(x+10, y-4, 14, 8);
  
  fill(0);
  ellipse(x-10, y-4, 4);
  ellipse(x+10, y-4, 4);
}

function mousePressed(){
  if (state === 'play' && dist(mouseX,mouseY, ghost.x, ghost.y) < 30) {
    score += 1;
    ghost.x += random(-80,80);
    ghost.y += random(-80,80);
    return;
  }

  if (state === 'play' && dist(mouseX,mouseY, enemy.x, enemy.y) < 25) {
    score -= 2;
    enemy.x += random(-120,120);
    enemy.y += random(-120,120);
    return;
  }

  if (state === 'start' || state === 'over') {
    state = 'play';
    score = 0;
    startTime = millis();
    return;
  }
}


