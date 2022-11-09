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
        let circleY = Math.random()*screenHeight;
        if(circleX > (screenWidth/4)*3 || circleX < screenWidth/4 || circleY > (screenHeight/4)*3 || circleY < screenHeight/4){
            context.fillStyle = "blue";
        
        }
       
        else {
            context.fillStyle = "white";
        }
        context.beginPath();
        context.ellipse(circleX,circleY,dotRadius,dotRadius,Math.PI,0,2*Math.PI);
        context.fill();
        
    }
}