const toggleBtn = document.getElementById("toggleBtn");
const closeBtn = document.getElementById("closeBtn");
const responsiveMenu = document.getElementById("responsiveMenu");

toggleBtn.addEventListener("click", function () {
  responsiveMenu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", function () {
  responsiveMenu.classList.add("hidden");
});
