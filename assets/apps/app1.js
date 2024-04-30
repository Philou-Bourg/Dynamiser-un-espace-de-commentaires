// Récupérer les éléments du formulaire
let formulaire = document.getElementById("monFormulaire");
let prenomInput = document.getElementById("first-name");
let nomInput = document.getElementById("last-name");
let commentaireInput = document.getElementById("message");

// Événement de clic pour le bouton "Envoyer"
formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupérer les valeurs saisies par l'utilisateur
    let prenom = prenomInput.value;
    let nom = nomInput.value;
    let commentaire = commentaireInput.value;

    // Créer un élément <h3> pour le nom complet
    let h3Element = document.createElement("h3");
    h3Element.textContent = `${prenom} ${nom}`;

    // Créer un élément <p> pour le commentaire
    let pElement = document.createElement("p");
    pElement.textContent = commentaire;

    // Ajouter les éléments au div avec l'id "comment-list"
    let commentList = document.getElementById("comment-list");
    commentList.appendChild(h3Element);
    commentList.appendChild(pElement);
     
    // Réinitialiser les champs du formulaire
     formulaire.reset();
    });
