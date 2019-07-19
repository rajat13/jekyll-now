var p1,p2

var ball;

var p1V,p2V

var score1, score2
var ballV;

function setup() {
  createCanvas(600, 450);
  p1V = p2V=createVector(0,20)
  
  score1 = 0
  score2 = 0
  p1 = height/2
  p2 = height/2
  ball = createVector(width/2,height/2)
  ballV = createVector(-2,2)
}

function updateScore(){
  text(score1,width/2-50,50)
  text(' | ', width/2,50)
  text(score2,width/2+50,50)
  textSize(20)
  fill(255)
}
function draw() {
  background(0)
  updateScore()
  
  handleBall()
  
  ellipse(ball.x,ball.y,20,20)
  rect(2,p1,12,100)
  rect(width-14,p2,12,100)
  
  p1 = constrain(p1,0,height-100)
  p2 = constrain(p2,0,height-100)
  

  handlePaddles()
}

function handleBall(){
  if(ball.y<=0 || ball.y>=height && ball.x>14 && ball.x<width-14){
    ballV.y*=-1
  }
  
  if(ball.x<24 && ball.x>=0 && ballV.x<0){
  if(ball.y>=p1 && ball.y<=p1+102){
    ballV.x*=-1.1;
    ballV.y*=1.1;
    score1++
  } else {
    refresh()
  }
  } 
  if(ball.x>=width-24 && ball.x<=width-3 && ballV.x>0){
  if(ball.y>=p2 && ball.y<=p2+102){
        ballV.x*=-1.1;
    ballV.y*=1.1;
    score2++
  } else {
    refresh()
  }
  }
  ball.x+=ballV.x
  ball.y+=ballV.y
}

function refresh(){
  score1=0
  score2=0
  ball = createVector(width/2,height/2)
  ballV= createVector(random(-2,2),random(-2,2))
  ballV.mult(3)
}

function handlePaddles(){
    if(keyIsDown(38)){
    p2-=0.4*p1V.y
  } 
  if(keyIsDown(40)){
    p2+=0.4*p1V.y;
  }
  
    if(keyIsDown(87)){
    p1-=0.4*p2V.y
  } 
  if(keyIsDown(83)){
    p1+=0.4*p2V.y;
  }
}
