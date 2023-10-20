let btns = document.querySelectorAll(".btn");
export function drawController(){
    let controllers = document.querySelector(".controllers");
    controllers.classList.remove("disappear");
    
}
let inputDirection = {x:0 , y:0};
let lastInput = {x:0,y:0};

export function getInput(){
    lastInput = inputDirection;
    btns.forEach(btn=>{
        btn.addEventListener("touchstart",()=>{
            if(btn.classList.contains("up")&&lastInput.y==0)
                inputDirection={x:0,y:-1};

            else if(btn.classList.contains("down")&&lastInput.y==0)
                inputDirection={x:0,y:1};

            else if(btn.classList.contains("left")&&lastInput.x==0)
                inputDirection={x:-1,y:0};

            else if(btn.classList.contains("right")&&lastInput.x==0) 
                inputDirection={x:1,y:0};
        })
    })
    return inputDirection;
}