let compteur = 0;

export function executerP1(): void {
    function addition(a: number, b: number): number {
        return a + b;
    }

    function incrementer(): number {
        compteur++;
        return compteur;
    }

    console.log("Addition :", addition(2, 3));
    console.log("Addition :", addition(2, 3));
    console.log("Incrément :", incrementer());
    console.log("Incrément :", incrementer());
}
