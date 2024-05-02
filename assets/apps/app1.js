

// Récupérer les éléments du formulaire
let formulaire = document.getElementById("monFormulaire");
let prenomInput = document.getElementById("first-name");
let nomInput = document.getElementById("last-name");
let commentaireInput = document.getElementById("message");
let errorMessage = document.getElementById("error-message"); // Récupérer l'élément du message d'erreur


// Événement de clic pour le bouton "Envoyer"
formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupérer et convertir les valeurs saisies par l'utilisateur
    let prenom = prenomInput.value.charAt(0).toUpperCase() + prenomInput.value.slice(1).toLowerCase();
    let nom = nomInput.value.charAt(0).toUpperCase() + nomInput.value.slice(1).toLowerCase();
    let commentaire = commentaireInput.value;

    // Vérifier si les champs sont vides
    if (prenom === "" || nom === "" || commentaire === "") {
    errorMessage.style.display = "block"; // Afficher le message d'erreur
    return; // Arrêter l'exécution du code
    } 
    else {
    errorMessage.style.display = "none"; // Masquer le message d'erreur
    }

    // Je crée un 1er élément <div> pour le nom complet et le commentaire et j'applique le style "flex space"
    let flexSpaceDiv = document.createElement("div");
    flexSpaceDiv.className = "flex space-x-4 text-sm text-gray-500";

    // Je crée un 2éme élément <div> pour le nom complet et le commentaire  et j'applique le style "flex 1"
    let Flex1Div = document.createElement("div");
    Flex1Div.className = "flex-1 py-10";

    // Je crée un titre h3 avec le nom complet (nom et prenom) et j'applique le style définie par la classe
    let h3Element = document.createElement("h3");
    h3Element.textContent = `${prenom} ${nom}`;
    h3Element.className = "font-medium text-gray-900";
    
    // Je crée un 3éme élément <div> pour le commentaire et j'applique le style "prose"
    let ProseDiv = document.createElement("div");
    ProseDiv.className = "prose prose-sm mt-4 max-w-none text-gray-500";

    // Je crée un paragraphe qui va contenir le champs commentaire
    let pElement = document.createElement("p");
    pElement.textContent = commentaire;

    // Dans cette partie, je rattache les éléments afin de respecter l'architecture du Html (je pars du pied pour remonter à la tête)

    // Ajouter le paragraphe au div "prose"
    ProseDiv.appendChild(pElement);

    // Ajouter le h3 et le div "prose" au div "Flex1Div"
    Flex1Div.appendChild(h3Element);
    Flex1Div.appendChild(ProseDiv);

    // Ajouter le div "Flex1Div" au div "flexSpaceDiv"
    flexSpaceDiv.appendChild(Flex1Div);

    // Ajouter le div "flexSpaceDiv" au div avec l'id "comment-list"
    let commentListDiv = document.getElementById("comment-list");
    commentListDiv.appendChild(flexSpaceDiv);

    // Réinitialiser les champs du formulaire
    formulaire.reset();
}
);
