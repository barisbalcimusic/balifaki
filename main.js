//-------------- SLIDESHOW --------------

const imagePath = "./images/anasayfa-resimler/";
const totalImages = 6;
let currentIndex = 1;
const slideshowImage = document.getElementById("slideshow-img");

function showNextImage() {
  slideshowImage.style.opacity = 0;
  slideshowImage.style.transform = "scale(0.98)";
  setTimeout(() => {
    slideshowImage.src = `${imagePath}${currentIndex}.png`;
    slideshowImage.style.opacity = 1;
    slideshowImage.style.transform = "scale(1)";
    slideshowImage.setAttribute("alt", "galeriden resimler");
    currentIndex = (currentIndex % totalImages) + 1;
  }, 1000); // 1 saniye sonra resmi değiştir
}

showNextImage(); // İlk resmi göster

const interval = setInterval(showNextImage, 5000); // 3 saniyede bir resmi güncelle

const slideshowContainer = document.querySelector(".slideshow-container");

slideshowContainer.addEventListener("click", () => {
  clearInterval(interval);
});

//-------------- TEXT PREVIEW --------------
let screenWidth = screen.width;
console.log(screenWidth);
if (screenWidth <= 768) {
  let text = document.getElementById("tanitim-text");
  let fullText = document.getElementById("tanitim-text").textContent;
  let previewText = fullText.substring(0, 400) + "... ";

  function showFullText() {
    text.innerHTML = fullText;
  }
  text.innerHTML =
    previewText +
    "<em class='devamini-oku' onclick='showFullText();'>devamını oku</em>";
}

// PLAYER

function onYouTubeIframeAPIReady() {
  var element = document.getElementById("youtube-audio");
  var imgElement = document.createElement("img");
  imgElement.setAttribute("id", "youtube-icon");
  imgElement.style.cssText = "cursor: pointer; cursor: hand";
  element.appendChild(imgElement);

  var playerElement = document.createElement("div");
  playerElement.setAttribute("id", "youtube-player");
  element.appendChild(playerElement);

  var changeIcon = function (isPlaying) {
    var iconSrc = isPlaying
      ? "./images/pause-solid.svg"
      : "./images/play-solid.svg";
    imgElement.setAttribute("src", iconSrc);
  };

  element.onclick = function () {
    if (
      player.getPlayerState() === YT.PlayerState.PLAYING ||
      player.getPlayerState() === YT.PlayerState.BUFFERING
    ) {
      player.pauseVideo();
      changeIcon(false);
    } else {
      player.playVideo();
      changeIcon(true);
    }
  };

  var player = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    videoId: element.dataset.video,
    playerVars: {
      autoplay: element.dataset.autoplay,
      loop: element.dataset.loop,
    },
    events: {
      onReady: function (event) {
        player.setPlaybackQuality("small");
        changeIcon(player.getPlayerState() !== YT.PlayerState.CUED);
      },
      onStateChange: function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          changeIcon(false);
        }
      },
    },
  });
}
