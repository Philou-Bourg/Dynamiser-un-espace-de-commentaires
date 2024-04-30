

// Récupérer les éléments du formulaire
let formulaire = document.getElementById("monFormulaire");
let prenomInput = document.getElementById("first-name");
let nomInput = document.getElementById("last-name");
let commentaireInput = document.getElementById("message");
let errorMessage = document.getElementById("error-message"); // Récupérer l'élément du message d'erreur


// Événement de clic pour le bouton "Envoyer"
formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupérer les valeurs saisies par l'utilisateur
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
    pElement.style.color = "rgb(107, 114, 128)";
    pElement.style.fontSize = "0.875rem";
    pElement.style.lineHeight = "1.7142857";

    // Créer un élément <br> pour le saut de ligne
let BrElement1 = document.createElement("br"); // 1er saut de ligne
let BrElement2 = document.createElement("br"); // 2éme saut de ligne


    // Ajouter les éléments au div avec l'id "comment-list"
    let commentList = document.getElementById("comment-list");
    commentList.appendChild(h3Element);
    commentList.appendChild(brElement); // Ajouter le saut de ligne
    commentList.appendChild(pElement);
    commentList.appendChild(BrElement1); // Ajouter ler saut de ligne
    commentList.appendChild(BrElement2); // Ajouter 2éme saut de ligne
     
    // Réinitialiser les champs du formulaire
     formulaire.reset();
    });
