const btnEl = document.querySelector(".btn");
const menuEl = document.querySelector(".icon");
const sidbarEl = document.querySelector(".menu");

menuEl.addEventListener("click", () => {
  sidbarEl.classList.toggle("show-sidbor");
});

btnEl.addEventListener("click", () => {
  sidbarEl.classList.remove("show-sidbor");
});
