function submitForm() {
    // Formulardaten löschen
    document.getElementById('contactForm').reset();

    // Nachricht anzeigen
    var messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = 'Nachricht gesendet';
    setTimeout(function () {
        messageContainer.textContent = '';
    }, 3000); // Nachricht nach 3 Sekunden ausblenden
}
