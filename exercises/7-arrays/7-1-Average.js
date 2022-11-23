"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let numbers = [];
setup ();

function setup(){

    let numbers = [];

    for(let i = 0; i < 1000; i++) {
        numbers [i] = Utils.randomNumber(0, 100);
    }
    console.log(calculateAverage (numbers));
    let numbers2 = [];
    for(let i = 0; i < 2000; i++){
        numbers2[i] = Utils.randomNumber(0, 200);
    }
    console.log(calculateAverage(numbers2));
}
function calculateAverage(listOfNumbers){
    let sum = 0;
    for(let i = 0; i < listOfNumbers.length; i++){
        sum += listOfNumbers[i];
    }
    return sum / listOfNumbers.length;
}

