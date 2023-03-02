new Swiper('.swiper', {
	speed: 2000,
	mousewheel: true,
	spaceBetween: 20,
	parallax: true
});

let audio = document.getElementById("myAudio");
let button = document.getElementById("playButton");
let myRange = document.getElementById("myRange");
let modalButton = document.getElementById("myModalButton");

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
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
};

const exitModal = () => {
    let modal = document.getElementById("myModal");
    modal.style.opacity = "0";
    audio.play();
    setTimeout(function () {
        modal.style.display = "none";
    }, 2000);
}

modalButton.addEventListener("click", () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
        exitModal();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
        exitModal();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
        exitModal();
  }
});