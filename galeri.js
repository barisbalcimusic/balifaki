// GALERI
let bg = document.getElementById("bg-field");
let field = document.getElementById("field");
let exit = document.getElementById("exit");
let image = document.getElementsByClassName("galeri-img");
let imageArray = Array.from(image);

imageArray.forEach((image) => {
  image.addEventListener("click", show);
});

bg.addEventListener("click", hide);
exit.addEventListener("click", hide);

function show(event) {
  field.classList.remove("hidden-field");
  field.classList.add("visible-field");
  document.body.style.overflowY = "hidden";
  document.getElementById("preview-img").src = event.target.src;
}

function hide() {
  field.classList.remove("visible-field");
  field.classList.add("hidden-field");
  document.body.style.overflowY = "visible";
  document.getElementById("preview-img").src = "";
}

window.addEventListener("load", function () {
  document.getElementById("youtube-audio").click();
});
