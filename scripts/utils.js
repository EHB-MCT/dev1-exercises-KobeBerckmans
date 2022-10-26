"use strict";
import context from "./context.js";
/**
 * draw lines between 2 points
 * @param {number} x1 x coordinate of the first point
 * @param {number} y1 y coordinate of the first point
 * @param {number} x2 x coordinate of the second point
 * @param {number} y2 y coordinate of the second point
 */

export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
export function rgb(r, g, b) {
    let rgb = "rgb("+ r + "," + g + "," + b + ")";
    return rgb;
}

export function strokeCircle(x, y, radius) {
context.beginPath();
context.ellipse(x, y, radius, radius,0,0,Math.PI*2);
context.stroke();
}

//x, y, rX, rY
export function fillAndStrokeEllipse(x, y, rX, rY){
    fillEllipse(x, y, rX, rY);
    strokeEllipse(x,y,rX,rY);
}
export function fillEllipse(x,y,rX,rY){
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);

}
    export function strokeEllipse(x,y,rX,rY){
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI*2);
    context.stroke();

}