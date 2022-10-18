"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
randomcolours(); 
function randomcolours(){

    let width = context.canvas.width;
    let height = context.canvas.height;

    square(100, 400);
square(125, 350);
square(150, 300);
square(175, 250);
square(200, 200);
square(225, 150);
square(250, 100);

function square(pos, size){
  
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

let color = "rgb(" + r + "," + g + "," + b + ")";
    context.fillStyle = color;
context.fillRect(pos, pos, size, size);
}





}