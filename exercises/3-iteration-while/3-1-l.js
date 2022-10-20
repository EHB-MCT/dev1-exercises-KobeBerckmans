"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawHourGlass();
}

function drawHourGlass() {
    let i = 0;
    let step = 10;
    let amount = 300/ step;
    while (i <= amount) {
        Utils.drawLine(200, 200,50+(i*step),350);
        Utils.drawLine(200, 200, 50+(i*step), 50);
        i++;
    }
}