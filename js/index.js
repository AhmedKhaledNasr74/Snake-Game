

let dark = document.querySelector(".checkbox");
let input = document.querySelector("input");

if(localStorage.getItem('dark')=="on")
    input.checked="true";


dark.onclick = function () {    
    if(localStorage.getItem("dark")=="off"||!localStorage.getItem("dark")){
        localStorage.setItem("dark","on");
        
        document.documentElement.dataset.theme = "on";

    }
        
    else{
        localStorage.setItem("dark","off");
        document.documentElement.dataset.theme = "off";
    }
        
}