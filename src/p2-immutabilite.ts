export function executerP2(): void {
    const etudiant = { nom: "Léo", note: 14 };

    function mettreAJourNote(
        etudiant: { nom: string; note: number },
        nouvelleNote: number
    ) {
        return { ...etudiant, note: nouvelleNote };
    }

    const etudiantMisAJour = mettreAJourNote(etudiant, 18);

    console.log("Étudiant original :", etudiant);
    console.log("Étudiant modifié :", etudiantMisAJour);
}
