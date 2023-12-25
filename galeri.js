// GALERI
async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    for (let i = 1; i < 66; i++) {
      let bg = document.getElementById("bg-field");
      let field = document.getElementById("field");
      let caption = document.getElementById("caption");

      let image = document.createElement("img");
      document.getElementById("galeri-container").appendChild(image);
      image.classList.add("galeri-img");
      image.setAttribute("src", `./images/pictures/${i}.jpg`);

      image.addEventListener("click", show);
      bg.addEventListener("click", hide);

      function show() {
        field.classList.remove("hidden-field");
        field.classList.add("visible-field");
        document.body.style.overflowY = "hidden";

        let imageData = document.createElement("img");
        document.getElementById("img-field").appendChild(imageData);
        imageData.classList.add("preview-img");
        imageData.setAttribute("id", "preview-img");
        imageData.setAttribute("src", `./images/pictures/${i}.jpg`);
        imageData.setAttribute("imgNumber", i);
        let imageNumber = imageData.getAttribute("imgNumber") - 1;
        if (data[imageNumber].length != 0) {
          caption.innerText = data[imageNumber];
        } else {
          document.getElementById("caption").style.display = "none";
        }
      }

      function hide() {
        field.classList.remove("visible-field");
        field.classList.add("hidden-field");
        document.body.style.overflowY = "visible";
        document.getElementById("preview-img").remove();
      }
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
