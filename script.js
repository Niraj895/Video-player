const player = document.getElementById("player");
const inputBox = document.getElementById("inputBox");

function generate() {
  const link = document.getElementById("videoLink").value.trim();
  if (!link) {
    alert("Video link daalo");
    return;
  }

  const encoded = btoa(link);
  const shareURL = `${location.origin}${location.pathname}?v=${encoded}`;

  history.replaceState(null, "", shareURL);
  playVideo(link);
}

function playVideo(link) {
  player.src = link;
  player.play();
}

function downloadVideo() {
  if (!player.src) return;
  const a = document.createElement("a");
  a.href = player.src;
  a.download = "video.mp4";
  a.click();
}

function sharePage() {
  navigator.clipboard.writeText(location.href);
  alert("Share link copied!");
}

/* Load from share link */
const params = new URLSearchParams(location.search);
if (params.get("v")) {
  const realLink = atob(params.get("v"));
  inputBox.style.display = "none";
  playVideo(realLink);
}
