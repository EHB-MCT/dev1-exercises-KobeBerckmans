"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

createTriangles()
function createTriangles(){
    let scale = 100;
    let x1 = Utils.randomNumber(0, width);
    let y1 = Utils.randomNumber(0, height);
    let x2 = x1 + Utils.randomNumber(-scale, scale);
    let y2 = y1 + Utils.randomNumber(-scale, scale);
    let x3 = x1 + Utils.randomNumber(-scale, scale);
    let y3 = y1 + Utils.randomNumber(-scale, scale);
    
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.fill();
}