window.addEventListener('DOMContentLoaded', (event) => {
    // Elemente mit den IDs "game_cc", "game_pong" und "game_space" auswählen
    const gameCC = document.getElementById('game_cc');
    const gamePong = document.getElementById('game_pong');
    const gameSpace = document.getElementById('game_space');

    // Zähler für angeklickte Felder und überprüfte Felder
    let clickCount = 0;
    let checkedCount = 0;

    // Funktion zum Ändern des Textes in der <div class="grid-item_2 comment">
    const changeCommentText = (event) => {
        const clickedElement = event.target;
        // Aktuell angeklicktes Feld grünen radialen Verlauf erstellen
        clickedElement.style.background = 'radial-gradient(circle, #00FF00 0%, #ffffff 70%)';

        // Zähler erhöhen
        clickCount++;

        // Variable für den rankDiv und commentDiv initialisieren
        let rankDiv;
        let commentDiv;

        // Switch-Case basierend auf dem Klickzähler
        switch (clickCount) {
            case 1:
                // Erster Klick: Text in rankDiv ändern
                rankDiv = document.getElementById('rank');
                rankDiv.querySelector('p').innerHTML = 'Text nach dem ersten Klick hier';
                break;
            case 2:
                // Zweiter Klick: Text in commentDiv ändern
                commentDiv = document.querySelector('.grid-item_2.comment');
                commentDiv.querySelector('p').innerHTML = 'Text nach dem zweiten Klick hier';
                break;
            case 3:
                // Dritter Klick: Text in beiden Divs ändern
                rankDiv = document.getElementById('rank');
                commentDiv = document.querySelector('.grid-item_2.comment');
                rankDiv.querySelector('p').innerHTML = 'Text nach dem dritten Klick hier für rank';
                commentDiv.querySelector('p').innerHTML = 'Text nach dem dritten Klick hier für comment';
                break;
            default:
                break;
        }

        // Überprüfen, ob alle Felder angeklickt wurden
        if (clickCount === 3) {
            gameCC.removeEventListener('click', changeCommentText);
            gamePong.removeEventListener('click', changeCommentText);
            gameSpace.removeEventListener('click', changeCommentText);
        }

        // Neue Kommentar-Box hinzufügen
        addNewCommentBox();
    };

    // Funktion zum Hinzufügen einer neuen Kommentar-Box
    const addNewCommentBox = () => {
        const commentContainer = document.querySelector('.sidebar');
        const newCommentBox = document.createElement('div');
        newCommentBox.classList.add('grid-item_2', 'comment');
        newCommentBox.innerHTML = '<p>Neuer Kommentar</p>';
        commentContainer.appendChild(newCommentBox);
    };

    // Klickereignisse für die Elemente hinzufügen
    gameCC.addEventListener('click', changeCommentText);
    gamePong.addEventListener('click', changeCommentText);
    gameSpace.addEventListener('click', changeCommentText);
});
