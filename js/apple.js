import { editApple } from './main.js';
import {snake, expandSnake} from './snake.js'

const EXPANSION_RATE = 1;

let eatSound = document.querySelector("#audioContainerEat");
let game = document.querySelector(".game");
let applePosition={x:1,y:0};
export let numberOfApples = 0;

function getRandomPosition(){
    let x= Math.floor((Math.random()*21)+1);
    return x;
}

export function generateApple(){
    applePosition.x=getRandomPosition();
    applePosition.y=getRandomPosition();
    return onSnake();
}

//check if the apple is on the snake body
function onSnake(){
    for(let i=0;i<snake.length;i++){
        if(snake[i].x==applePosition.x&&snake[i].y==applePosition.y){
            return true
        }
    }
    return false;
}


export function drawApple(){
    let apple = document.createElement("div");
    apple.classList.add("apple");
    apple.style.gridRowStart=applePosition.y;
    apple.style.gridColumnStart=applePosition.x;
    game.appendChild(apple);
}

function eatSnake(){
    if(snake[0].x==applePosition.x&&snake[0].y==applePosition.y)
        return true;
    else
        return false;
}


export function update(){
    if(eatSnake()){
        eatSound.play();
        numberOfApples++;
        expandSnake(EXPANSION_RATE);
        editApple(false);
    }
}
