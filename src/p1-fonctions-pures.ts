let compteur = 0;

export function executerP1(): void {

    function addition(a: number, b: number): number {
        // add est prévisible car pour les mêmes paramètres, elle retourne toujours le même résultat et ne modifie aucun état externe.
        return a + b;
    }

    function incrementer(): number {
        // increment n’est pas prévisible car elle modifie une variable globale, son résultat dépend donc des appels précédent.
        compteur++;
        return compteur;
    }

    console.log("Addition :", addition(2, 3));
    console.log("Addition :", addition(2, 3));
    console.log("Incrément :", incrementer());
    console.log("Incrément :", incrementer());
}
