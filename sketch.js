var bullet1, bullet2, bullet3, bullet4, wall;
var thickness = random(22, 83);
var speed = random(55,90);
var weight = random(400,1500);
var damage = 0;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  bullet1 = createSprite(400, 400, 50, 50);
  bullet2 = createSprite(400, 800, 50, 50);
  bullet3 = createSprite(400, 1200, 50, 50);
  bullet4 = createSprite(400, 1600, 50, 50);
  wall = createSprite(1200, 400, thickness, height/2);
  wall.shapeColor = RGB(80, 80, 80);
  var speed, weight, thickness;
  thickness=random(22, 83);
  speed=random(223,321);
  weight=random(30, 52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;
  bullet4.velocityX = speed;
  run();
}
function run(){
  if(wall.x-bullet1.x < (wall.width+bullet2.width/2))
  {
    bullet1.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (damage<10)
    {
      bullet1.shapeColor="green";
    }
    if (damage>10)
      {
        bullet1.shapeColor="red";
      }
    }
      if(wall.x-bullet1.x < (wall.width+bullet1.width/2))
  {
    bullet1.velocityX=0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage<10)
    {
      bullet2.shapeColor="green";
    }
    if (damage>10)
      {
        bullet2.shapeColor="red";
      }
    }
      if(wall.x-bullet2.x < (wall.width+bullet2.width/2))
  {
    bullet3.velocityX=0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage<10)
    {
      bullet3.shapeColor="green";
    }
    if (damage>10)
      {
        bullet3.shapeColor="red";
      }
      bullet4.velocityX=0;
      var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
      if (damage<10)
      {
        bullet4.shapeColor="green";
      }
      if (damage>10)
        {
          bullet4.shapeColor="red";
        }
  }
}