// 0. Ask the player’s name
let playerName = prompt("Enter your name:");
if (playerName) {
  alert(`Welcome, ${playerName}! Use the arrow keys to drive the car.`);
}

// 1. Grab elements and initialize state
const car        = document.querySelector("#car");
const obstacles  = document.querySelectorAll(".obstacle");
const finishLine = document.querySelector(".finish");
let marginX      = 0;      // horizontal offset
let marginY      = 0;      // vertical offset
let gameOver     = false;


function isColliding(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();

  return !(
    r1.bottom < r2.top    || 
    r1.top    > r2.bottom ||  
    r1.right  < r2.left   ||  
    r1.left   > r2.right     
  );
}

// 3. “Game Over” handler
function endGame() {
  gameOver = true;
  if (confirm("💥 Game Over!\nDo you want to restart?")) {
    window.location.reload();
  }
}

// 4. “You Win!” handler
function winGame() {
  gameOver = true;
  if (confirm("🎉 Congratulations — You win!\nPlay again?")) {
    window.location.reload();
  }
}

// 5. Main loop: check for win first, then crash
function checkCollisionLoop() {
  if (gameOver) return;

  // Win check
  if (isColliding(car, finishLine)) {
    winGame();
    return;
  }

  // Crash check
  for (let obs of obstacles) {
    if (isColliding(car, obs)) {
      endGame();
      return;
    }
  }

  requestAnimationFrame(checkCollisionLoop);
}

// 6. Move the car on arrow keys
car.addEventListener("keydown", (e) => {
  if (gameOver) return;

  switch (e.key) {
    case "ArrowRight":
      marginX += 5;
      car.style.marginLeft = marginX + "px";
      car.style.transform  = "rotate(90deg)";
      break;

    case "ArrowLeft":
      marginX -= 5;
      car.style.marginLeft = marginX + "px";
      car.style.transform  = "rotate(270deg)";
      break;

    case "ArrowUp":
      marginY -= 5;
      car.style.marginTop  = marginY + "px";
      car.style.transform  = "rotate(0deg)";
      break;

    case "ArrowDown":
      marginY += 5;
      car.style.marginTop  = marginY + "px";
      car.style.transform  = "rotate(180deg)";
      break;
  }
});

// 7. Start everything
car.focus();
requestAnimationFrame(checkCollisionLoop);
