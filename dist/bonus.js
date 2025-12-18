"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executerBonus = executerBonus;
function executerBonus() {
    const donnees = [
        { nom: "Alice", age: 25, pays: "France" },
        { nom: "Bob", age: 15, pays: "France" },
        { nom: "Charlie", age: 30, pays: "Spain" },
        { nom: "Diana", age: 22, pays: "France" },
    ];
    const adultesFrancais = donnees.filter(u => u.age >= 18 && u.pays === "France");
    const nomsTries = [...adultesFrancais]
        .sort((a, b) => b.age - a.age)
        .map(u => u.nom);
    const moyenneAge = adultesFrancais.reduce((acc, u) => acc + u.age, 0) /
        adultesFrancais.length;
    console.log("Adultes français :", adultesFrancais);
    console.log("Noms triés :", nomsTries);
    console.log("Moyenne d’âge :", moyenneAge);
}
