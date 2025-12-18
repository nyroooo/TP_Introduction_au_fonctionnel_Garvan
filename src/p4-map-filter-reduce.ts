export function executerP4(): void {
    const nombres = [1, 2, 3, 4, 5, 6];

    const resultat = nombres
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((acc, n) => acc + n, 0);

    console.log("Résultat 4.1 :", resultat);

    const somme = (tab: number[]) =>
        tab.reduce((acc, n) => acc + n, 0);

    const moyenne = (tab: number[]) =>
        somme(tab) / tab.length;

    const produit = (tab: number[]) =>
        tab.reduce((acc, n) => acc * n, 1);

    console.log("Somme :", somme(nombres));
    console.log("Moyenne :", moyenne(nombres));
    console.log("Produit :", produit(nombres));
}
