

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

    // Créer un élément <h3> pour le nom complet
    let h3Element = document.createElement("h3");
    h3Element.textContent = `${prenom} ${nom}`;

    // Appliquer le style "font-weight: 500" à l'élément <h3>
    h3Element.style.fontWeight = "500";
    h3Element.style.fontSize = "inherit";
    h3Element.style.color = "rgb(17, 24, 39)";

    // Créer un élément <br> pour le saut de ligne
    let brElement = document.createElement("br");


    // Créer un élément <p> pour le commentaire
    let pElement = document.createElement("p");
    pElement.textContent = commentaire;
   

    // Style : Créer un élément <div> pour englober le nom et le commentaire
    let divElement = document.createElement("div");
    divElement.className = "flex space-x-4 text-sm text-gray-500";

    // Créer un sous-div pour le contenu
    let contentDiv = document.createElement("div");
    contentDiv.className = "flex-1 py-10 border-t border-gray-200";


    // Ajouter le <h3> et le <p> au sous-div
    contentDiv.appendChild(h3Element);
    contentDiv.appendChild(brElement); // Ajouter le saut de ligne
    contentDiv.appendChild(pElement);


    // Ajouter le sous-div au div principal
    divElement.appendChild(contentDiv);


    // Ajouter le div principal au div avec l'id "comment-list"
    let commentList = document.getElementById("comment-list");
    commentList.appendChild(divElement);


    // Réinitialiser les champs du formulaire
    formulaire.reset();
}
);
