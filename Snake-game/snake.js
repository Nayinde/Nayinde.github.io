import { userInputDirection } from "./input.js"

export const snakeSpeed = 2
const snakeBody = [{ x:12, y:12 }]
const gameBoard = document.querySelector('.game-board')
let newSegments = 0

export function updateSnakeLength() {
    addSegments()
    const inputDirection = userInputDirection ()
    for(let i= snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = { ...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function drawObjects(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
    
}

export function growSnake(amount) {
    newSegments += amount
}

export function onSnake(position){
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return (
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments(){
    for(let i=0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1] })
    }
    newSegments = 0
}

