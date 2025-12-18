"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executerP3 = executerP3;
function executerP3() {
    function appliquerNFois(f, n, x) {
        let resultat = x;
        for (let i = 0; i < n; i++) {
            resultat = f(resultat);
        }
        return resultat;
    }
    const doubler = (x) => x * 2;
    console.log("Appliquer N fois :", appliquerNFois(doubler, 3, 1));
}
