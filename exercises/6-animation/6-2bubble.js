"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let xSpeed = 10;
let ySpeed = 10;
let x;
let y;
let size = 40;

let isPlaying= true;

window.onclick = click;

setup();
function setup(){
    x = width / 2;
    y = height / 2;

    update();
}

function update() {

    if (isPlaying) {
        //background
    context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);

    

    //check x border

    if (x >= width - size || x <= size) {
        xSpeed *= -1;
    }

    if (x >= height - size || y <= size) {
        ySpeed *= -1;
    }

    //updating x coordinate
    x += xSpeed;
    y += ySpeed;


    //draw a circle
    context.fillStyle = 'blue';
    Utils.fillCircle(x, y, size);
    requestAnimationFrame(update);   
    }
    
}

function click(eventData) {
    console.log('Clicked!', eventData.x, eventData.y);

    let mouseX = eventData.x;
    let mouseY = eventData.y;

    if(Utils.calculateDistance(x, y, mouseX, mouseY) < size) {
isPlaying = false;

    context.fillStyle = 'red';
    Utils.fillCircle(mouseX, mouseY, size/2);
}
}