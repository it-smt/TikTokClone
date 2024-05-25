const content = document.querySelector("#content");
const menuButtons = document.querySelectorAll("#menuButton");
const menu = document.querySelector("#menu");
const videoPlayer = document.querySelector("#videoPlayer");
const video = document.querySelector("#video");

menuButtons.forEach((menuButton) => {
  menuButton.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    video.pause();
    videoPlayer.classList.remove("_active");
    if (menu.classList.contains("_active")) {
      menu.classList.remove("_active");
      menu.style = "pointer-events: none;";
    } else {
      menu.classList.add("_active");
      menu.style = "pointer-events: all;";
    }
  });
});

content.addEventListener("click", () => {
  if (menu.classList.contains("_active")) {
    menu.classList.remove("_active");
    document.body.classList.remove("_lock");
    menu.style = "pointer-events: none;";
  }
});

const menuItem = document.querySelectorAll("#menuItem");

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("_active");
  });
});

videoPlayer.addEventListener("click", () => {
  // videoPlayer.classList.toggle("_active");
  viedoIsActive(video);
});

video.addEventListener("ended", () => {
  videoPlayer.classList.remove("_active");
});

function viedoIsActive(videoEl) {
  if (!menu.classList.contains("_active")) {
    if (videoEl.paused) {
      videoPlayer.classList.add("_active");
      videoEl.play();
      videoEl.setAttribute("muted", false);
    } else {
      videoPlayer.classList.remove("_active");
      videoEl.pause();
    }
  }
}

const likeButton = document.querySelector("#likeButton");

likeButton.addEventListener("click", () => {
  likeButton.classList.toggle("_active");
});

const repostPopup = document.querySelector("#repostPopup");
const repostButton = document.querySelector("#repostButton");
const repostClose = document.querySelector("#repostButtonClose");

repostButton.addEventListener("click", (e) => {
  repostPopup.classList.add("_active");
  document.body.classList.add("_lock");
});

repostClose.addEventListener("click", (e) => {
  repostPopup.classList.remove("_active");
  document.body.classList.remove("_lock");
});
