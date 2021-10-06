let cancion=document.getElementById("cancion");
let play_pause_btn=document.getElementById("play_pause_btn");
let cover=document.getElementById("caratula");
let controls=document.querySelector(".controls");




let count=0;
function play_pause(){
    if(count==0){
        count=1;
        cancion.play();
        cover.style.animationPlayState ="running";
        controls.style.animationPlayState ="running";
        play_pause_btn.innerHTML="||"

    }
    else{
        count=0;
        cancion.pause();
        cover.style.animationPlayState ="paused";
        controls.style.animationPlayState ="paused";
        play_pause_btn.innerHTML="▶"
    }

}
function stop(){
    play_pause();
    cancion.pause()
    cancion.currentTime=0;
    play_pause_btn.innerHTML="▶";
}





