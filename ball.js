//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var Xvelocity = 100;
var Yvelocity = 28;
var ball = document.getElementById("ball");
var Xreverse = false;
var Yreverse = false;
var ballColor="black";
var backColor="white";

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
  var Ymin=0;
  var Ymax = 300;

  //move the ball to the right until the max X value is reached
  
  /*             TIM, THIS IS THE PART I WANTED TO WORK...
              I'm going to be more straight forward and do one movement, as 
              I suspect that's what #2 wants. (I'm on 2/4 and can't get it to 
              validate.) I see on 3/4, I'm supposed to use a reverse variable.
              Perhaps the instructions for 3 should be on step 2; or remove the 
              reverse check on #2.   So much time wasted on "2" when I needed info
              from 3 to do 2. I figured I better get 2/4 to work before moving onto 3/4.

              Still curious why this doesn't work, though.  All I could think of 
              was the 100ms interval was too fast to make it all happen, 
              therefore the ball never moved.  I tried extending the interval, 
              but that wasn't the trick either.  
  */
  /*

  while(positionX <= Xmax){
      
      positionX = positionX + velocity;
      ball.style.left = positionX + 'px';
      console.log('Increasing: ' + ball.style.left);
  }

  //gets here when the Xmax value is met. Time to decrease positionX
  while(positionX > Xmin){
      positionX = positionX - velocity;
      ball.style.left = positionX + 'px';
      console.log('Decreasing: ' + ball.style.left);
  }
}
*/

//if it is false, move forward
if(!Xreverse)
{
  positionX = positionX + Xvelocity;
}
//true, go backwards
else
{
  positionX = positionX - Xvelocity;
}

//false, go down
if(!Yreverse)
{
  positionY = positionY + Yvelocity;
}
//true, go up
else
{
  positionY = positionY - Yvelocity;
}

//whatever the value, move the ball.
ball.style.left = positionX + 'px';
ball.style.top = positionY + 'px';

//Check for x-axis min/max
if (positionX >= Xmax || positionX <= Xmin)
{
  Xreverse=!Xreverse;
  pickAColor();
  ball.style.backgroundColor="#" + ballColor;
}

if (positionY >= Ymax || positionY <= Ymin)
{
  Yreverse=!Yreverse;
  pickAColor();
  document.body.style.backgroundColor = "#" + ballColor;
}
}

function pickAColor(){
    ballColor = Math.floor(Math.random()*16777215).toString(16);
}
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
