let letters = document.getElementById("letters");
let input = document.querySelector("input");
let i = 0;
input.addEventListener("keyup", (event)=>{
    if(event.key == "Backspace"){
        i = i - 1
        if(i<0){
            i = 0;
        }
    }
    else if(event.key == "CapsLock"){
        i = i
    }
    else if(event.key == "Shift"){
        i = i
    }
    else if(event.key == "Control"){
        i = i
    }
    else if(event.key == "Meta"){
        i = i
    }
    else if(event.key == "Alt"){
        i = i
    }
    else{
        i += 1
    }
    letters.innerText = `Letters: ${i}`
})