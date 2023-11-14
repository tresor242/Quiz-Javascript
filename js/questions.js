//creating an array and passing the number, questions, options, and answers

let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ]
    }
];



for (let i = 0; i < questions.length; i++) {
    // Accéder à l'objet courant dans le tableau
    let currentQuestion = questions[i];

    // Accéder à chaque propriété de l'objet
    console.log("Numéro de la question:", currentQuestion.numb);
    console.log("Question:", currentQuestion.question);
    console.log("Réponse correcte:", currentQuestion.answer);

    // Accéder à chaque option
    for (let j = 0; j < currentQuestion.options.length; j++) {
        console.log("Option", j + 1 + ":", currentQuestion.options[j]);
    }

    // Ajouter une ligne vide pour séparer les questions
    console.log("\n");
}