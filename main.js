// Sélectionner le formulaire et la liste des lieux
const form = document.querySelector('.search-tab form');
const locationList = document.querySelector('.info ul');

// Ajouter un gestionnaire d'événements pour la soumission du formulaire
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    const location = document.querySelector('#search-location').value.trim();

    if (location) {
        // Créer un nouvel élément de liste
        const newLocation = document.createElement('li');
        newLocation.textContent = location;

        // Ajouter le nouvel élément à la liste
        locationList.appendChild(newLocation);

        // Réinitialiser le champ de saisie
        document.querySelector('#search-location').value = '';
    } else {
        alert('Veuillez entrer un lieu.');
    }
});

// Ajouter un gestionnaire d'événements pour le formulaire "Contactez-nous"
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    const name = document.querySelector('#contact-name').value.trim();
    const email = document.querySelector('#contact-email').value.trim();
    const message = document.querySelector('#contact-message').value.trim();

    if (name && email && message) {
        alert('Votre message a été envoyé avec succès.');
        // Réinitialiser les champs du formulaire
        document.querySelector('#contact-name').value = '';
        document.querySelector('#contact-email').value = '';
        document.querySelector('#contact-message').value = '';

        // Ajouter un message de confirmation
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Merci de nous avoir contactés. Nous vous répondrons bientôt.';
        confirmationMessage.style.color = 'green';
        contactForm.appendChild(confirmationMessage);
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
