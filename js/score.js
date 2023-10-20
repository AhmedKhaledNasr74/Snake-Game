import { numberOfApples } from "./apple.js";


let user = localStorage.getItem("user");

export function score(){
    let bar = document.querySelector(".bar");
    let score = document.createElement("div");
    let highScore=document.createElement("div");
    
    score.innerHTML=`Score: ${numberOfApples}`;
    
    if(numberOfApples>+localStorage.getItem(user))
        localStorage.setItem(`${user}`,`${numberOfApples}`);
    highScore.innerHTML=`HighScore: ${localStorage.getItem(`${user}`)||0}`;
    bar.innerHTML="";
    bar.appendChild(score);
    bar.appendChild(highScore);
}

