const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreText = document.getElementById("score");

const box = 20;
let snake = [{x: 200, y: 200}];
let food = randomFood();
     
let dx = box;
let dy = 0;

let score = 0;
let game;

document.addEventListener("keydown", changeDirection);

function randomFood() {
  return {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
  };
}

function changeDirection(e) {
  if(e.key === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -box;
  }
  if(e.key === "ArrowDown" && dy === 0) { 
    dx = 0;0
    dy = box;
  }
  if(e.key === "ArrowLeft" && dx === 0) {
    dx = -box;
    dy = 0;
  }
  if(e.key === "ArrowRight" && dx === 0) {
    dx = box;
    dy = 0;
  }
}

function drawGame() {

  ctx.clearRect(0,0,400,400);

  snake.forEach(part => {
    ctx.fillStyle = "lime";
    ctx.fillRect(part.x, part.y, box, box);
  });

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  let head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy
  }; 

  if(head.x === food.x && head.y === food.y) {
    score++;
    scoreText.innerText = "Score: " + score;
    food = randomFood();
  } else {
    snake.pop();
  }

  if(
    head.x < 0 || head.y < 0 ||
    head.x >= 400 || head.y >= 400 ||
    snake.some(part => part.x === head.x && part.y === head.y)
  ) {
    clearInterval(game);
    alert("Game Over! Score: " + score);
  }

  snake.unshift(head);
}

function restartGame() {
  snake = [{x: 200, y: 200}];
  dx = box;
  dy = 0;
  score = 0;
  scoreText.innerText = "Score: 0";
  food = randomFood();

  clearInterval(game);
  game = setInterval(drawGame, 150);
}

game = setInterval(drawGame, 150);
