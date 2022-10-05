"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
drawname();
function drawname(){
    //letter k
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,250);
    context.stroke();
    context.beginPath();
    context.moveTo(50,125);
    context.lineTo(125,250);
    context.stroke();
    context.beginPath();
    context.moveTo(50,125);
    context.lineTo(125,50);
    context.stroke();
    //letter o
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(175,50);
    context.lineTo(175,250);
    context.stroke();
    context.beginPath();
    context.moveTo(175,50);
    context.lineTo(270,50);
    context.stroke();
    context.beginPath();
    context.moveTo(270,50);
    context.lineTo(270,250);
    context.stroke();
    context.beginPath();
    context.moveTo(270,250);
    context.lineTo(175,250);
    context.stroke();
    //letter b
    context.strokeStyle = 'pink';
    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(300,250);
    context.stroke();
    context.beginPath();
    context.moveTo(300,155);
    context.lineTo(400,155);
    context.stroke();
    context.beginPath();
    context.moveTo(400,155);
    context.lineTo(400,250);
    context.stroke();
    context.beginPath();
    context.moveTo(400,250);
    context.lineTo(300,250);
    context.stroke();
    //letter e
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(450,50);
    context.lineTo(450,250);
    context.stroke();
    context.beginPath();
    context.moveTo(450,50);
    context.lineTo(550,50);
    context.stroke();
    context.beginPath();
    context.moveTo(450,150);
    context.lineTo(550,150);
    context.stroke();
    context.beginPath();
    context.moveTo(450,250);
    context.lineTo(550,250);
    context.stroke();
    











}