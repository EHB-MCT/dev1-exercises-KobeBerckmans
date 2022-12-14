"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let screenWidth = context.canvas.width;
let dotRadius = 2;
let screenHeight = context.canvas.height;

background();
function background(){
context.fillStyle = "black";
context.fillRect(0,0,screenWidth, screenHeight);
}
drawCircles();
function drawCircles(){
    for(let i=0;i<=10000;i++){
        let circleX = Math.random()*screenWidth;
        if(circleX < screenWidth/2){
            context.fillStyle = "red";
        } else {
            context.fillStyle = "green";
        }
        context.beginPath();
        context.ellipse(circleX,Math.random()*screenHeight,dotRadius,dotRadius,Math.PI,0,2*Math.PI);
        context.fill();
        
    }
}