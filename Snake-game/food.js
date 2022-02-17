import { onSnake, growSnake } from './snake.js'

let food = { x: 10, y: 1 }
const growthRate = 1

export function moveFood() {
    if (onSnake(food)) {
        growSnake(growthRate)
        food = {x: 20, y:10}
    }
}

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}