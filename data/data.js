fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        for (const category in data) {
            const entries = data[category];

            for (const key in entries) {
                const elementId = `${category}-${key}`;
                const element = document.getElementById(elementId);
                const value = entries[key];

                if (element) {
                    // Link-Objekt mit href und title
                    if (typeof value === 'object' && value.href && value.title) {
                        if (element.tagName === 'A') {
                            element.href = value.href;
                            element.textContent = value.title;
                        }
                    }
                    // Bild-Objekt mit src und title
                    else if (typeof value === 'object' && value.src && element.tagName === 'IMG') {
                        element.src = value.src;
                        if (value.title) {
                            element.title = value.title;
                            element.alt = value.title;
                        }
                    }
                    // <img> mit einfachem src-String
                    else if (element.tagName === 'IMG') {
                        element.src = value;
                    }
                    // <a> mit einfachem String
                    else if (element.tagName === 'A') {
                        element.href = value;
                        element.textContent = value;
                    }
                    // Standard: Textinhalt
                    else {
                        element.textContent = value;
                    }
                }
            }
        }
    })
    .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
