function submitForm() {
    // ausgefülltes löschen
    document.getElementById('contactForm').reset();

    // Nachricht wird anzeigen
    var messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = 'Nachricht gesendet';
    setTimeout(function ()
    {
        messageContainer.textContent = '';
    }, 3000); // ncachricht nach 3 Sekunden ausblenden
}
