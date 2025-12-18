"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executerP1 = executerP1;
let compteur = 0;
function executerP1() {
    function addition(a, b) {
        return a + b;
    }
    function incrementer() {
        compteur++;
        return compteur;
    }
    console.log("Addition :", addition(2, 3));
    console.log("Addition :", addition(2, 3));
    console.log("Incrément :", incrementer());
    console.log("Incrément :", incrementer());
}
