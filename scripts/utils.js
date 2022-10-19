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
}