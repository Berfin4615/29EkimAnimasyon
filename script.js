const video = document.getElementById("introVideo");
const overlay = document.getElementById("videoOverlay");
const main = document.getElementById("mainContent");

video.addEventListener("ended", () => {
  overlay.style.display = "none";
  main.style.opacity = 1;
});
document.getElementById('playBtn').addEventListener('click', () => {
  const video = document.getElementById('introVideo');
  video.play();
  document.getElementById('playBtn').style.display = 'none';
});
video.addEventListener("ended", () => {
  overlay.style.display = "none";
  main.style.opacity = 1;

  document.querySelector(".cumhuriyet").classList.remove("hidden");
  document.querySelector(".cumhuriyet").classList.add("show-cumhuriyet");

  document.querySelector(".yıl").classList.remove("hidden");
  document.querySelector(".yıl").classList.add("show-yıl");

  document.querySelector(".kutlu").classList.remove("hidden");
  document.querySelector(".kutlu").classList.add("show-kutlu");
});
