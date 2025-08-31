fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    function applyData(obj, path = []) {
      for (const key in obj) {
        const value = obj[key];
        const currentPath = [...path, key];
        const elementId = currentPath.join('-');
        const element = document.getElementById(elementId);

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          applyData(value, currentPath); // Rekursion
        } else if (element) {
          if (element.tagName === 'IMG') {
            element.src = value;
          } else if (element.tagName === 'A') {
            if (key === 'href') {
              element.href = value;
            } else {
              element.textContent = value;
            }
          } else {
            element.textContent = value;
          }
        }
      }
    }

    applyData(data);
  })
  .catch(error => console.error('Fehler beim Laden der JSON-Daten:', error));
