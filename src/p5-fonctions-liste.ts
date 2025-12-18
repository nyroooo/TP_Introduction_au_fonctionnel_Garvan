export function executerP5(): void {
    const utilisateurs = [
        { nom: "Alice", age: 25 },
        { nom: "Bob", age: 15 },
        { nom: "Charlie", age: 30 },
        { nom: "Diana", age: 17 },
    ];

    const premierMajeur = utilisateurs.find(u => u.age >= 18);
    console.log("Premier majeur :", premierMajeur);

    console.log(
        "Au moins un mineur :",
        utilisateurs.some(u => u.age < 18)
    );

    console.log(
        "Tous ont plus de 10 ans :",
        utilisateurs.every(u => u.age > 10)
    );

    const noms = utilisateurs.map(u => u.nom);
    console.log("Alice présent :", noms.includes("Alice"));
    console.log("Eve présent :", noms.includes("Eve"));

    const utilisateursAvecHobbies = [
        { nom: "Alice", hobbies: ["climbing", "yoga"] },
        { nom: "Bob", hobbies: ["gaming"] },
        { nom: "Charlie", hobbies: ["reading", "hiking"] },
    ];

    const tousLesHobbies = utilisateursAvecHobbies.flatMap(
        u => u.hobbies
    );
    console.log("Tous les hobbies :", tousLesHobbies);

    const triesParAge = [...utilisateurs].sort(
        (a, b) => a.age - b.age
    );

    console.log("Deux plus jeunes :", triesParAge.slice(0, 2));
}
