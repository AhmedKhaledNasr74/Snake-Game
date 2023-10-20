import { getInput } from "./arrows.js";
import { getInputDirection } from "./input.js";
import { detectDeviceType } from "./main.js";

let game = document.querySelector(".game");
export let snake = [{x:11,y:11}];


export function draw(){
    let count=0;
    game.innerHTML="";
    snake.forEach(part=>{
        const snakePart = document.createElement("div");
        snakePart.style.gridRowStart=part.y;
        snakePart.style.gridColumnStart=part.x;
        snakePart.classList.add("snake");
        if(count==0)
            snakePart.classList.add('head');
        game.appendChild(snakePart);
        count++;
    })
}



export function update(){
    let inputDirection;
    if(detectDeviceType()=="Mobile")
        inputDirection = getInput();
    else
        inputDirection = getInputDirection();

    for(let i=snake.length - 2 ; i >= 0 ; i--){
        snake[i+1] = {...snake[i]}
    }
    snake[0].x+=inputDirection.x;
    snake[0].y+=inputDirection.y;
}


export function expandSnake(EXPANSION_RATE){
    for(let i=0;i<EXPANSION_RATE;i++)
        snake.push(snake[{...snake.length-1}]);
}


export function outsideGrid(){
    return(snake[0].x<1||snake[0].x>21||snake[0].y<1||snake[0].y>21)
}


export function onItself(){
    for(let i=1;i<snake.length-1;i++){
        if(snake[i].x==snake[0].x&&snake[i].y==snake[0].y){
            return true
        }
    }
    return false;
}