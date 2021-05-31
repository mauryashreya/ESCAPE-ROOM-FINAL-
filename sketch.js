var gameState=0;
var score=0;
var timer;
var counter = 180;
var seconds, minutes;

function preload(){
  img=loadImage("images/bg1.jpg");
  bg2img=loadImage("images/bg2.jpg");
  sponge=loadImage("images/sponge.png");
  cap=loadImage("images/cap.png");
  lock=loadImage("images/lock.png");
  keyImg=loadImage("images/key.png");
  water=loadImage("images/water.png");
  win=loadImage("images/YOU.jpg")
  loss=loadImage("images/loss.jpeg");
}

function setup(){
  createCanvas(1536,722)
  security=new Security()
  system=new System()
  setInterval(timer,1000)
}

function draw(){
  background(bg2img);
  if(gameState===0){
    fill("black");
    textSize(40);
    stroke("pink");
    strokeWeight("3");
    textAlign(CENTER);
    text("Answer the questions truely to escape the room !!", width/2,150 );
    text("Remember  you have to answer all the questions to escape the room  ",width/2,200)
    text("You have 3 minutes! Let's Go!  ",width/2,630)
    text("Press Space to Start",width/2,680)
    image(img,600,250)
    security.hide()
    if (keyDown("space")){
      gameState=1;
    }
  }
  
  if(gameState===1){
    security.display();
    security.show();
    clues();
    stroke("red");
    textSize(20);
    text("CORRECT ANSWERS : "+ score, 200,40);
    textAlign(CENTER)
    fill("red")
    stroke("black")
    textSize(45)
    text(minutes + ":" + seconds,width-200,50);

    imageMode(CENTER); 
    image(sponge,150,600,150,150);
    image(cap,400,250,150,150);
    image(lock,800,300,170,170);
    image(keyImg,1300,250,400,150);
    image(water,1400,600,170,170);
    

    if(score===6||(minutes===0&&seconds===0)){
      gameState=2;
    }
  }
  
  if(gameState===2){
    security.hide()
    background("cadetblue")
    if(score===6){
      stroke("RED")
      strokeWeight("3")
      fill("black")
      textSize(35);
      textAlign(CENTER)
      text("Congratulations!!",width/2,height/2-100)
      text("Bravo! You escaped from the room !!",width/2,height/2-50);
      imageMode(CENTER)
      image(win,800,500)
     
     
    }
    else{
      stroke("RED");
      strokeWeight(3);
      fill("black");
      textSize(35);
      textAlign(CENTER);
      text("OH NO! YOU RAN OUT OF TIME ",width/2,height/2-100)
      text("You are trapped in the room forever! ",width/2,height/2+240)
      imageMode(CENTER)
      image(loss,width/2,height/2+75,230,230);
    }
  }
}

function timer() {
  if (counter > 0) {
    counter--;
  }

 minutes = Math.floor(counter/60);
 seconds = counter % 60;

}