"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];
let yPos = [];
let sizes = [];

let bubblesAmount = 50;
let ySpeeds = [];
setup();

function setup(){
    for(let i = 0; i < bubblesAmount; i++){
    xPos[i] = width / 2;
    yPos[i] = height - 50;
    sizes[i] = 30 + Math.random() * 20;
    ySpeeds = Math.random() * 20;
    
    ySpeeds = 5;
    update();
}
}


function update(){
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    for(let i = 0; i < bubblesAmount; i++); {
    
    yPos[i] -= Math.random() * 20;
    drawBubble(xPos[i], yPos[i], sizes[i], 10);{
        requestAnimationFrame(update);
    }
}


    
    


    function drawBubble(x, y, radius){
        let hue = Utils.randomNumber(160, 240);
        
        context.fillStyle = Utils.hsl(hue, 50, 50);
        Utils.fillAndStrokeCircle(x, y, radius);
        context.fillStyle = Utils.hsl(hue, 50, 40);
        Utils.fillAndStrokeCircle(x + radius /3, y - radius /3, radius /4);
        
        
    
    }






}


