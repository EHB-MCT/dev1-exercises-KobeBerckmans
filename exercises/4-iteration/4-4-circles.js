"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let amount = 10;

let step = width / amount;
drawCircles();

function drawCircles() {
    context.fillStyle = Utils.hsl(200, 50, 50, 0.3);

    for (let j = 0; j < amount; j++){
        console.log(j);
        for(let i = 0; i < amount; i++) {
            let size = 20 + j * 10;       
Utils.fillCircle(i * step, j * step, size / 2);
        }
    }
}
