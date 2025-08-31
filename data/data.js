fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        // Alle Kategorien durchgehen
        for (const category in data) {
            const entries = data[category];

            for (const id in entries) {
                const element = document.getElementById(id);
                const value = entries[id];

                if (element) {
                    // Wenn es ein <img> ist, setze src
                    if (element.tagName === 'IMG') {
                        element.src = value;
                    }
                    // Wenn es ein <a> ist, setze href
                    else if (element.tagName === 'A') {
                        element.href = value;
                    }
                    // Sonst: Textinhalt setzen
                    else {
                        element.textContent = value;
                    }
                }
            }
        }
    })
    .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
