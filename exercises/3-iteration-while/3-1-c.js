"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    while (i < 5) {
        let step = 165;
        Utils.drawLine(50, step+20*i, 350, step+20*i);
        Utils.drawLine(step+20*i, 50, step+20*i, 350);
        i+=1;
    }
}