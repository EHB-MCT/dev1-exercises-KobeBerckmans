"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
rectangles();
function rectangles(){
    context.strokeStyle = 'red';
    context.beginPath();
context.rect(50, 50, 150, 150);
context.stroke();

context.strokeStyle = 'red';
    context.beginPath();
context.rect(200, 200, 150, 150);
context.stroke();

context.strokeStyle = 'red';
    context.beginPath();
context.rect(125, 125, 150, 150);
context.stroke();
context.fill();

    context.beginPath();
context.rect(50, 335, 15, 15);
context.stroke();
context.fill();

context.strokeStyle = 'red';
    context.beginPath();
context.rect(65, 275, 60, 60);
context.stroke();

context.strokeStyle = 'red';
    context.beginPath();
context.rect(275, 65, 60, 60);
context.stroke();

context.beginPath();
context.rect(335, 50, 15, 15);
context.stroke();
context.fill();
}