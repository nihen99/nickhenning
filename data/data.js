fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    for (const category in data) {
      const section = data[category];

      for (const key in section) {
        const entries = section[key];

        for (const subkey in entries) {
          const value = entries[subkey];
          const elementId = `${category}-${key}-${subkey}`;
          const element = document.getElementById(elementId);

          if (element) {
            // Wenn value ein Objekt mit href und title ist → Link
            if (typeof value === 'object' && value.href && value.title && element.tagName === 'A') {
              element.href = value.href;
              element.textContent = value.title;
            }
            // Wenn value ein Objekt mit src und title ist → Bild
            else if (typeof value === 'object' && value.src && element.tagName === 'IMG') {
              element.src = value.src;
              element.title = value.title || '';
              element.alt = value.title || '';
            }
            // Wenn value ein einfacher String → Text oder href
            else {
              if (element.tagName === 'IMG') {
                element.src = value;
              } else if (element.tagName === 'A') {
                element.href = value;
                element.textContent = value;
              } else {
                element.textContent = value;
              }
            }
          }
        }
      }
    }
  })
  .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
