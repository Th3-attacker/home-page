const toggleBtn = document.getElementById("toggleBtn");
const closeBtn = document.getElementById("closeBtn");
// const opacityBody = document.querySelector('body');
const responsiveMenu = document.getElementById("responsiveMenu");

toggleBtn.addEventListener("click", function () {
  responsiveMenu.classList.toggle("hidden");
  // opacityBody.style.backgroundColor = 'rgba(0,0,0, 0.7)';

});

closeBtn.addEventListener("click", function () {
  responsiveMenu.classList.add("hidden");
  // opacityBody.style.backgroundColor = '#fff';
});
