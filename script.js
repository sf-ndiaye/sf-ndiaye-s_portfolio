// 1. SÉLECTION DES ÉLÉMENTS (Le DOM va chercher les objets HTML)
const champLogin = document.getElementById('login');
const boutonConnexion = document.getElementById('submitBtn');
const sousTitre = document.querySelector('h2');
const conteneurFormulaire = document.querySelector('.Container');

// 2. ÉCOUTER CE QUE TAPE L'UTILISATEUR (Événement 'input')
champLogin.addEventListener('input', function() {
    // On récupère le texte tapé et on le transforme en minuscules
    const texteSaisi = champLogin.value.toLowerCase();

    // 3. LE DOM EN ACTION : Changement dynamique du design selon le rôle
    if (texteSaisi === 'admin') {
        // L'utilisateur tape "admin" : l'interface passe en mode sécurité maximale (Rouge)
        sousTitre.textContent = "⚙️ Console Administrateur";
        sousTitre.style.color = "#ff0055";
        conteneurFormulaire.style.borderColor = "#ff0055";
        boutonConnexion.style.borderColor = "#ff0055";
        boutonConnexion.style.color = "#ff0055";
        
    } else if (texteSaisi.includes('etudiant') || texteSaisi.startsWith('e_')) {
        // L'utilisateur tape un identifiant étudiant : l'interface passe en mode académique (Cyan/Vert)
        sousTitre.textContent = "🎓 Espace Étudiant";
        sousTitre.style.color = "#00ffcc";
        conteneurFormulaire.style.borderColor = "#00ffcc";
        boutonConnexion.style.borderColor = "#00ffcc";
        boutonConnexion.style.color = "#00ffcc";
        
    } else {
        // Retour au style par défaut si le texte ne correspond à rien de spécial
        sousTitre.textContent = "Connexion Sécurisée";
        sousTitre.style.color = "#ffffff";
        conteneurFormulaire.style.borderColor = "#ff007f"; // Rose de base
        boutonConnexion.style.borderColor = "#ff007f";
        boutonConnexion.style.color = "#ff007f";
    }
});

// 4. BLOQUER OU SÉCURISER LA SOUMISSION
const formulaire = document.getElementById('loginForm');
formulaire.addEventListener('submit', function(evenement) {
    // On empêche le rechargement immédiat de la page pour le test
    evenement.preventDefault(); 
    
    alert(`Redirection en cours pour le profil : ${champLogin.value}`);
    // Ici le DOM permet de valider le profil avant d'appeler connexion.php
});
