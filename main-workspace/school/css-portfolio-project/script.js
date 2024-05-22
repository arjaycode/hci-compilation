"use strict";

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 550) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }

  if (window.scrollY > 600) {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
});

document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    let contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

document
  .querySelector(".menu-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .querySelector(".close-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSideBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
