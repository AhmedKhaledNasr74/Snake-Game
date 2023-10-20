import { drawApple, generateApple, numberOfApples, update as updateSnake} from "./apple.js";
import { drawController } from "./arrows.js";
import { score } from "./score.js";
import { draw, onItself, outsideGrid, update  } from "./snake.js";

let lastRenderTime = 0;
const SNAKE_SPEED = 8;
let loseSound = document.querySelector("#audioContainerDead");
let stat = document.querySelector(".stat");
let alert = document.querySelector(".alert");

//flag for apple to determine wheater i will will generate another one or not
export let apple=false;
export function editApple(neww){
    apple=neww;
}

function checkDeath(){
    return (outsideGrid()||onItself());
}

function mainUpdate(){
    updateSnake();
    update();
    score();
    
}

function mainDraw(){
    draw();
    drawApple();
}

//#Source https://bit.ly/2neWfJ2 
export const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';


console.log(detectDeviceType()); // "Mobile" or "Desktop"
if(detectDeviceType()=="Mobile"){
    drawController();
}


window.requestAnimationFrame( main);
function  main(currentTime){
    if(checkDeath()){
        loseSound.play();
        //alert him that he lost
        stat.innerHTML=`${numberOfApples} Apple <br> ${Math.floor(currentTime/1000)} Sec`;
        alert.classList.remove("disappear");
        window.addEventListener('click',e=>{
            window.location.reload();
        })
        window.addEventListener('keydown',e=>{
            window.location.reload();
        })
        return;
    }
    window.requestAnimationFrame(main);
    //equation that calculate the speed of the snake
    if((currentTime - lastRenderTime)/1000 <1/SNAKE_SPEED){
        return;
    }
    lastRenderTime = currentTime;
    mainUpdate();
    if(apple===false){
        while(generateApple());
        apple=true;
    }
    mainDraw();
}