var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(225);
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0,0,0);  

  if (hascollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    
    if(damage > 10){
      wall.shapeColor=color(225,0,0); 
    }

    if(damage < 10){
      wall.shapeColor=color(0,225,0); 
    }
  }
  
  drawSprites();
}

function hascollided(p1,p2) {
  
  bulletRightEdge = p1.x + p1.width;
  wallLeftEdge = p2.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true ;
  }

  return false ;
  

}
