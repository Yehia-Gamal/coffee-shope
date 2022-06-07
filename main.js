let shopping = document.getElementById("shopping");
let active = document.getElementById("menu");

shopping.onclick = () => {
  active.classList.toggle("active");
  activeSearch.classList.remove("active");
};

let search = document.getElementById("search");
let activeSearch = document.getElementById("form");

search.onclick = () => {
  activeSearch.classList.toggle("active");
  active.classList.remove("active");
};

window.onscroll = () => {
  active.classList.remove("active");
  activeSearch.classList.remove("active");
};

let body = document.querySelector("section");

body.onclick = () => {
  active.classList.remove("active");
  activeSearch.classList.remove("active");
};
