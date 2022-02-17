import {updateSnakeLength as updateSnake, drawObjects as drawSnake, snakeSpeed} from './snake.js'

import {moveFood as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0
const gameBoard = document.querySelector('.game-board')

function mainLoop(currentTime) {
  window.requestAnimationFrame(mainLoop)
  const secondSinceLastRender = (currentTime - lastRenderTime)/ 1000  
  if (secondSinceLastRender < 1 / snakeSpeed) return

  lastRenderTime = currentTime


  updateSnakeLength()
  drawObjects()
} 
window.requestAnimationFrame(mainLoop);

function updateSnakeLength() {
    updateSnake()
    updateFood()
}

function drawObjects() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
