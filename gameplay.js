const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const gameOver = document.getElementById("game-over");
const playAgain = document.getElementById("play-again");
const scoreDisplay = document.getElementById("score");

const car = {
    width: 40,
    height: 80,
    x: 10,
    y: canvas.height - 80,
    speed: 5,
};

const obstacles = [
    {
        width: 20,
        height: 80,
        x: canvas.width,
        y: canvas.height - 80,
        speed: 1,
    },
    {
        width: 20,
        height: 80,
        x: canvas.width + 200,
        y: canvas.height - 80,
        speed: 1,
    },
    {
        width: 20,
        height: 80,
        x: canvas.width + 400,
        y: canvas.height - 80,
        speed: 1,
    },
];

let score = 0;

playAgain.addEventListener("click", function() {
    gameOver.style.visibility = "hidden";
    obstacles.forEach(function(obstacle) {
        obstacle.x = canvas.width;
        obstacle.y = canvas.height - obstacle.height;
    });
    score = 0;
});

document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case "ArrowUp":
            car.y -= car.speed;
            break;
        case "ArrowDown":
            car.y += car.speed;
            break;
        case "ArrowLeft":
            car.x -= car.speed;
            break;
        case "ArrowRight":
            car.x += car.speed;
            break;
    }
});

function update() {
    obstacles.forEach(function(obstacle) {
        obstacle.x -= obstacle.speed;
        if (obstacle.x + obstacle.width < 0) {
            obstacle.x = canvas.width;
            obstacle.y = Math.floor(Math.random() * (canvas.height - obstacle.height));
            score++;
            scoreDisplay.innerHTML = "Score: " + score;
        }

        if (
            car.x < obstacle.x + obstacle.width &&
            car.x + car.width > obstacle.x &&
            car.y < obstacle.y + obstacle.height &&
            car.y + car.height > obstacle.y
        ) {
            gameOver.style.visibility = "visible";
            return;
        }
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCar();
    obstacles.forEach(drawObstacle);
    requestAnimationFrame(update);
}

function drawCar() {
    ctx.fillStyle = "red";
    ctx.fillRect(car.x, car.y, car.width, car.height);
}

function drawObstacle(obstacle) {
    ctx.fillStyle = "blue";
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

update();
