export function executerP3(): void {
    function appliquerNFois(
        f: (x: number) => number,
        n: number,
        x: number
    ): number {
        let resultat = x;
        for (let i = 0; i < n; i++) {
            resultat = f(resultat);
        }
        return resultat;
    }

    const doubler = (x: number) => x * 2;

    console.log("Appliquer N fois :", appliquerNFois(doubler, 3, 1));
}
