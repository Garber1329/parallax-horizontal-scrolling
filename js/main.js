new Swiper('.swiper', {
	speed: 2000,
	mousewheel: true,
	spaceBetween: 20,
	parallax: true
});

let audio = document.getElementById("myAudio");
let button = document.getElementById("playButton");
let audioController = document.getElementById("audioController");
let volumeControl = document.getElementById("volumeControl");
let myRange = document.getElementById("myRange");

button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        button.className = "btn__play";
    } else {
        audio.pause();
        button.className = "btn__pause";
    }
});

audioController.addEventListener("mouseover", function() {
    volumeControl.style.display = "block";
});

audioController.addEventListener("mouseout", function() {
    volumeControl.style.display = "none";
});

myRange.addEventListener("input", function() {
	audio.volume = myRange.value / 100;
});
