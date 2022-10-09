"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
coloredbox();
function coloredbox(){
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,200);
    context.stroke();
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,50);
    context.stroke();
    context.beginPath();
    context.moveTo(50,200);
    context.lineTo(200,200);
    context.stroke();
    context.beginPath();
    context.moveTo(200,200);
    context.lineTo(200,50);
    context.stroke();

    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.stroke();
    context.beginPath();
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.stroke();
    


}   