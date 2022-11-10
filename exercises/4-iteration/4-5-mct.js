"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
 drawRandomContent();
 drawCenteredText();
 drawMask();

 function drawRandomContent(){
    for(let i = 0; i < 1000; i++) {
        context.lineWidth = Math.random() * 10;
        let gray = Math.floor(Math.random()* 255);
        context.strokeStyle = Utils.rgb(gray, gray, gray,0,5);
        let y1 = Math.random()* height;
        let y2 = Math.random() * height;
        Utils.drawLine(0, y1, width, y2);
        
        //text
        let fontSize = Math.floor(Math.random()* 50);
        context.font = fontSize + "px Arial";
        context.fillText("MCT",Math.random()* width, Math.random() * height);
    }
 }
 function drawCenteredText(){
    context.textAlign = 'center';
    
    context.fillStyle = " #000";
    context.font = " 200px Arial";
    context.fillText("MCT", width / 2, height / 2);

    context.fillStyle = " #F00";
    context.font = " 120px Arial";
    context.fillText("ehb", width / 2, height / 2 - 200);

    context.fillStyle = "#FFF";
    context.font = " 120px Arial";
    context.fillText("is top", width / 2, height / 2 + 200);

 }
 function drawMask(){
    context.rotate(Math.PI / 2);
    context.fillRect(0,0, width / 2, height / 2 + 200);
    context.lineTo(width/2, 0);
    context.lineTo(0, height / 2);
    context.fill();

 }