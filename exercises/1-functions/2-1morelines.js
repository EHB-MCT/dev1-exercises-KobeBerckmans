"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");
drawLines(); 
function drawLines(){

let marginX= 100;

let marginY = 100;
let marginRight = window.innerWidth-marginX;

let marginBottom = window.innerHeight-marginY;

let marginBetween = (window.innerHeight- (marginY*2))/5;

context.beginPath();
    context.moveTo(marginX,marginY);
    context.lineTo(marginRight,marginY);
    context.stroke();
    context.beginPath();
    context.moveTo(marginRight,marginY);
    context.lineTo(marginX,marginY+marginBetween);
    context.stroke();
    context.beginPath();
    context.moveTo(marginX,marginY+marginBetween);
    context.lineTo(marginRight,marginY+marginBetween);
    context.stroke();
    context.beginPath();
    context.moveTo(marginRight,marginY+marginBetween);
    context.lineTo(marginX,(marginY+marginBetween*2));
    context.stroke();
    context.beginPath();
    context.moveTo(marginX,marginY+marginBetween*2);
    context.lineTo(marginRight,marginY+marginBetween*2);
    context.stroke();
    context.beginPath();
    context.moveTo(marginRight,marginY+marginBetween*2);
    context.lineTo(marginX,(marginY+marginBetween*3));
    context.stroke();
    context.beginPath();
    context.moveTo(marginX,(marginY+marginBetween*3));
    context.lineTo(marginRight,marginY+marginBetween*3);
    context.stroke();
    context.beginPath();
    context.moveTo(marginRight,marginY+marginBetween*3);
    context.lineTo(marginX,(marginY+marginBetween*4));
    context.stroke();
    context.beginPath();
    context.moveTo(marginX,(marginY+marginBetween*4));
    context.lineTo(marginRight,marginY+marginBetween*4);
    context.stroke();
    context.beginPath();
    context.moveTo(marginRight,marginY+marginBetween*4);
    context.lineTo(marginX,marginY);
    context.stroke();


    





   

   





}