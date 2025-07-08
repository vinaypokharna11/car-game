// let Name=prompt("enter your name");
// if(Name=="vanshi"){
// alert(`heyy !! babe... vinay love you and  Happy to have you ${Name} !! have funn`)
// }
// else{
//    alert(`Happy to have you ${Name} !! have funn`)
// }

let car     = document.querySelector("#car");
let obstacles = document.querySelectorAll(".obstacle");

let margin = 0;
let up     = 0;
let gameOver = false;

// 1. Simple AABB collision check
function isColliding(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();
  return !(
    r1.bottom  < r2.top    ||
    r1.top     > r2.bottom ||
    r1.right   < r2.left   ||
    r1.left    > r2.right
  );
}

// 2. When collision detected, show restart confirm
function endGame() {
  gameOver = true;
  if (confirm("💥 Game Over!\nDo you want to restart?")) {
    window.location.reload();
  }
}

// 3. Continuous loop to check collision
function checkCollisionLoop() {
  if (!gameOver) {
    obstacles.forEach(obs => {
      if (isColliding(car, obs)) {
        endGame();
      }
    });
    requestAnimationFrame(checkCollisionLoop);
  }
}

// 4. Move car on arrow keys (your existing logic)
car.addEventListener("keydown", e => {
  if (gameOver) return;  
  if (e.key === "ArrowRight") {
    margin += 5;
    car.style.marginLeft = margin + "px";
    car.style.transform  = "rotate(90deg)";
  }
  else if (e.key === "ArrowLeft") {
    margin -= 5;
    car.style.marginLeft = margin + "px";
    car.style.transform  = "rotate(270deg)";
  }
  else if (e.key === "ArrowUp") {
    up -= 5;
    car.style.marginTop = up + "px";
    car.style.transform = "rotate(0deg)";
  }
  else if (e.key === "ArrowDown") {
    up += 5;
    car.style.marginTop = up + "px";
    car.style.transform = "rotate(180deg)";
  }
});

car.focus();

// 5. Kick off the collision-checking loop
requestAnimationFrame(checkCollisionLoop);

