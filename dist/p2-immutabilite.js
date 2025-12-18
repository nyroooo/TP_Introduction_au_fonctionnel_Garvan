"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executerP2 = executerP2;
function executerP2() {
    const etudiant = { nom: "Léo", note: 14 };
    function mettreAJourNote(etudiant, nouvelleNote) {
        return { ...etudiant, note: nouvelleNote };
    }
    const etudiantMisAJour = mettreAJourNote(etudiant, 18);
    console.log("Étudiant original :", etudiant);
    console.log("Étudiant modifié :", etudiantMisAJour);
}
