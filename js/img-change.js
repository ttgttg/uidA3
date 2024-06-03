const xbox = document.getElementById("xbox");
const ps = document.getElementById("ps");
const nintendo = document.getElementById("nintendo");
const wii = document.getElementById("wii");
const imgArea = document.getElementById("img-area");

function changeImage(newSrc) {
  imgArea.classList.add("hidden");

  setTimeout(() => {
    imgArea.src = newSrc;

    // Force a reflow to restart the animation
    void imgArea.offsetWidth;

    imgArea.classList.add("fade-in");

    imgArea.classList.remove("hidden");

    setTimeout(() => {
      imgArea.classList.remove("fade-in");
    }, 100);
  }, 100);
}

xbox.addEventListener("click", function () {
  changeImage("../img/consoles.svg");
});

ps.addEventListener("click", function () {
  changeImage("../img/psconsole.svg");
});

nintendo.addEventListener("click", function () {
  changeImage("../img/switchconsole.svg");
});

wii.addEventListener("click", function () {
  changeImage("../img/wiiconsole.svg");
});
