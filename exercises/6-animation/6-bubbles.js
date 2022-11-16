"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let frameCount = 0;

drawBubbles();

function drawBubbles(){
    if (frameCount % 1 == 0) {
        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        let radius = Utils.randomNumber(5, 100);
        drawBubble(x, y, radius);

    }
    frameCount++;    
    requestAnimationFrame(drawBubbles);
    
    
}

function drawBubble(x, y, radius){
    let hue = Utils.randomNumber(160, 240);
    
    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillAndStrokeCircle(x, y, radius);
    context.fillStyle = Utils.hsl(hue, 50, 40);
    Utils.fillAndStrokeCircle(x + radius /3, y - radius /3, radius /4);
    
    

}

/**
 * 
 * 
 */