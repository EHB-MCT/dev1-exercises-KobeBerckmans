"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCrossHair;

function drawCrossHair(event) {
    console.log(event.pageX, event.pageY);
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    Utils.drawLine(event.pageX, 0, event.pageX, height);
    Utils.drawLine(0, event.pageY, width, event.pageY);
    

   

}
