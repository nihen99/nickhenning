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
                    // Wenn der Wert ein Objekt mit href und title ist → Link
                    if (typeof value === 'object' && value.href && value.title) {
                        element.href = value.href;
                        element.textContent = value.title;
                    }
                    // Wenn es ein <img> ist, setze src
                    else if (element.tagName === 'IMG') {
                        element.src = value;
                    }
                    // Wenn es ein <a> ist, setze href und optional Text
                    else if (element.tagName === 'A') {
                        element.href = value;
                        element.textContent = value;
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
