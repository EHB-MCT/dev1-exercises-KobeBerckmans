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
drawDots();

function drawDots() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
        if (distance < 50 || distance > 100) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "red";
        }
        Utils.fillCircle(x, y, 5);
    }
}