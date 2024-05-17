const randomImg = Math.round(Math.random() * 2) + 1;

function checkOnline() {
  if (!navigator.onLine) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("offline-img-container");
    const img = document.createElement("img");
    img.setAttribute("src", `./assets/img/offline-wallpapers${randomImg}.png`);
    img.setAttribute("alt", "offline img");

    imgContainer.appendChild(img);
    document.body.appendChild(imgContainer);
  }
}