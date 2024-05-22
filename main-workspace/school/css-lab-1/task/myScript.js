"use strict";
let firstParagraph = document.getElementById("change-color-target");
let changeColorButton = document.getElementById("change-color");
let changeBorderButton = document.getElementById("change-border");
let changeBorderTarget = document.getElementById("change-border-target");

changeColorButton.onclick = changeColor;
changeBorderButton.onclick = changeBorder;

let hex = "0123456789ABCDEF";
let color = "#";
let borders = [
  "dotted",
  "dashed",
  "solid",
  "double",
  "ridge",
  "inset",
  "outset",
];

function changeColor() {
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 15)];
  }
  firstParagraph.style.color = color;
  firstParagraph.style.fontSize = Math.random() * 5 + 10 + "px";
  color = "#";
}

function changeBorder() {
  changeBorderTarget.style.borderStyle = borders[Math.floor(Math.random() * 7)];
}
