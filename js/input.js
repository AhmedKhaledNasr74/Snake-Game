    let inputDirection = {x:0 , y:0};
    let lastInput = {x:0,y:0};

export function getInputDirection(){
    lastInput = inputDirection;
    return inputDirection;
}

window.addEventListener("keydown",e=>{
    
    switch (e.key){
        case "ArrowUp":
            if(lastInput.y !==0) break;
            inputDirection={x:0,y:-1};
            break;
        case "w":
            if(lastInput.y !==0) break;
            inputDirection={x:0,y:-1};
            break;
        case "ArrowDown":
            if(lastInput.y !==0) break;
            inputDirection={x:0,y:1};
            break;
        case "s":
            if(lastInput.y !==0) break;
            inputDirection={x:0,y:1};
            break;
        case "ArrowLeft":
            if(lastInput.x !==0) break;
            inputDirection={x:-1,y:0};
            break;
        case "a":
            if(lastInput.x !==0) break;
            inputDirection={x:-1,y:0};
            break;
        case "ArrowRight":
            if(lastInput.x !==0) break;
            inputDirection={x:1,y:0};
            break;
        case "d":
            if(lastInput.x !==0) break;
            inputDirection={x:1,y:0};
            break;
    }
})