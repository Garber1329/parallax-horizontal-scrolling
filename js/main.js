new Swiper('.swiper', {
	speed: 2000,
	mousewheel: true,
	spaceBetween: 20,
	parallax: true
});

let audio = document.getElementById("myAudio");
let button = document.getElementById("playButton");
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

myRange.addEventListener("input", function() {
	audio.volume = myRange.value / 100;
});

window.onload = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
};

document.addEventListener("keydown", function(event) {
    if (event.key === "F11") {
        var modal = document.getElementById("myModal");
        modal.style.opacity = "0";
        audio.play();
    }
});
