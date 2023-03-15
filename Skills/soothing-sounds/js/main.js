var ocean = document.getElementById("ocean-aud");
var bird = document.getElementById("bird-aud");
var rain = document.getElementById("rain-aud");
var thunder = document.getElementById("thunder-aud");
var wind = document.getElementById("wind-aud");
var seagull = document.getElementById("seagull-aud");
var crickets = document.getElementById("cricket-aud");
var coffee = document.getElementById("coffee-aud");
var campfire = document.getElementById("fire-aud");
var keyboard = document.getElementById("keyboard-aud");
var waterfall = document.getElementById("waterfall-aud");
var meditate = document.getElementById("meditate-aud");


function play(audioElem){
    audio = audioElem;
    audio.loop = true;

    if(audio.paused){ audio.play(); }
    else{ audio.pause(); }
    
}

function changeVol(volumeAmount, audioElem){
    
    audObj = audioElem;
    audObj.volume = volumeAmount;
}

// let toggle = true;
// function changeCardColor(id){
//     const elem = document.getElementById(id);
//     elem.style.backgroundColor = toggle ? "rgba(255,255,255,.8)" : "rgba(255,255,255,.2)";
//     toggle = !toggle;
//     alert(id);
// }

function changeCardColor(id){
    var divElem = document.getElementById(id);
    console.log(id);
    divElem.classList.toggle("active-div");
}