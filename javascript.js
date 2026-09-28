let day = new Date().getDay();
let bgType;

function dayFlags(){

let dayFlags = document.querySelector("#dayFlags");
let dayText = document.querySelector("#dayText");

if (day == 1){
    dayFlags.textContent="monday";
    dayText.textContent="Monday";
}
else if (day == 2){
    dayFlags.textContent="tuesday";
    dayText.textContent="Tuesday";
}
else if (day == 3){
    dayFlags.textContent="wednesday";
    dayText.textContent="Wednesday";
}
else if (day == 4){
    dayFlags.textContent="thursday";
    dayText.textContent="Thursday";
}
else if (day == 5){
    dayFlags.textContent="friday";
    dayText.textContent="Friday";
}
else if (day == 6){
    dayFlags.textContent="saturday";
    dayText.textContent="Saturday";
}
else {
    dayFlags.textContent="sunday";
    dayText.textContent="Sunday";
}
}

function changeBackgroundLightMode(){
    let body = document.querySelector("body");
    let bgType = Math.random() * 10

    if(bgType >= 0 && bgType < 2){
        body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('images/backgroundimage.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 2 && bgType < 4){
        body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('images/backgroundimage2.jpg')";
        body.style.backgroundSize = "cover";
    }
   else if(bgType >= 4 && bgType < 6){
        body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('images/backgroundimage3.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 6 && bgType < 8){
        body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('images/backgroundimage4.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 8 && bgType < 10){
        body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('images/backgroundimage5.jpg')";
        body.style.backgroundSize = "cover";
    }
    else{
        body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('images/backgroundimage.jpg')";
        body.style.backgroundSize = "cover";
    }
}

function changeBackgroundDarkMode(){
    let body = document.querySelector("body");
    let bgType = Math.random() * 10
    console.log(bgType);

    if(bgType >= 0 && bgType < 2){
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/backgroundimage.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 2 && bgType < 4){
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/backgroundimage2.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 4 && bgType < 6){
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/backgroundimage3.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 6 && bgType < 8){
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/backgroundimage4.jpg')";
        body.style.backgroundSize = "cover";
    }
    else if(bgType >= 8 && bgType < 10){
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/backgroundimage5.jpg')";
        body.style.backgroundSize = "cover";
    }
    else{
        body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('images/backgroundimage.jpg')";
        body.style.backgroundSize = "cover";
    }
}

function buttonFunction() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkMode) {
        changeBackgroundDarkMode();
      } else {
        changeBackgroundLightMode();
      }
    }

window.addEventListener("load", dayFlags);
button.addEventListener("click", buttonFunction);