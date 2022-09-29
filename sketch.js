var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(100,100,50,50)
  console.log (ball)
}

function draw() 
{
  background(30);

  if(keyWentDown("RIGHT_ARROW")) {
ball.position.x += 5
  }

  if(keyWentDown("UP_ARROW")) {
    ball.position.y -= 5
      }

      if(keyWentDown("DOWN_ARROW")) {
        ball.position.y += 5
          }

          
          if(keyWentDown("LEFT_ARROW")) {
            ball.position.x -= 5
              }
            

  drawSprites()


}




