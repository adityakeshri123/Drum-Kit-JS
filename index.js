
function play_sound(key){

    var audio_file;
    if(key==="w"){
        audio_file="sounds/tom-1.mp3";
    }
    else if(key==="a"){
        audio_file="sounds/tom-2.mp3";
    }
    else if(key==="s"){
        audio_file="sounds/tom-3.mp3";
    }
    else if(key==="d"){
        audio_file="sounds/tom-4.mp3";
    }
    else if(key==="j"){
        audio_file="sounds/snare.mp3";
    }
    else if(key==="k"){
        audio_file="sounds/crash.mp3";
    }
    else if(key==="l"){
        audio_file="sounds/kick-bass.mp3";
    }
    else{
        console.log(btn_text);
    }
    var audio = new Audio(audio_file);
    audio.play();

}

function button_animation(key){
    active_key= document.querySelector("."+key);
    active_key.classList.add("pressed");

    setTimeout(function(){
        active_key.classList.remove("pressed");
    },100)
}

var len = document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        play_sound(key);
        button_animation(key);
    });
}

document.addEventListener("keypress",function(event){
    play_sound(event.key);
    button_animation(event.key);
});
