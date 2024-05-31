const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.onclick = function loadSearch() {
  search.classList.toggle("active");
};
