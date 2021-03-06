let shopping = document.getElementById("shopping");
let active = document.getElementById("menu");

shopping.onclick = () => {
  active.classList.toggle("active");
  activeSearch.classList.remove("active");
  burger.classList.remove("is-active");
  nav.classList.remove("active");
};

let search = document.getElementById("search");
let activeSearch = document.getElementById("form");

search.onclick = () => {
  activeSearch.classList.toggle("active");
  active.classList.remove("active");
  burger.classList.remove("is-active");
  nav.classList.remove("active");
};

let burger = document.getElementById("burger");
let nav = document.querySelector(".nav");

burger.onclick = () => {
  nav.classList.toggle("active");
  burger.classList.toggle("is-active");
  active.classList.remove("active");
  activeSearch.classList.remove("active");
};

window.onscroll = () => {
  active.classList.remove("active");
  activeSearch.classList.remove("active");
  burger.classList.remove("is-active");
  nav.classList.remove("active");
};

let body = document.querySelector("section");

body.onclick = () => {
  active.classList.remove("active");
  activeSearch.classList.remove("active");
  burger.classList.remove("is-active");
  nav.classList.remove("active");
};
