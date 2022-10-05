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








}