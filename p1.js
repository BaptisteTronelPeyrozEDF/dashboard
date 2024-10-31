document.addEventListener("DOMContentLoaded", () => {
    const csvUrl = "/requete_python/csv/test_appel.csv";
    const periodeInput = document.getElementById("periode");

    function loadCSV() {
        fetch(csvUrl)
            .then(response => {
                if (!response.ok) throw new Error("Erreur de chargement du fichier CSV");
                return response.text();
            })
            .then(content => filterByDate(content))
            .catch(error => {
                console.error("Erreur :", error);
            });
    }

    function filterByDate(content) {
        const rows = content.split('\n');
        
        // Écoute les changements de date
        periodeInput.addEventListener("change", () => {
            const selectedDate = formatDate(periodeInput.value);

            // Trouve la ligne correspondant à la date sélectionnée
            const row = rows.find(r => r.startsWith(selectedDate));
            if (row) {
                displayValues(row);
            } else {
                console.error("Aucune donnée trouvée pour cette date.");
                clearValues();
            }
        });
    }

    function formatDate(date) {
        const [year, month, day] = date.split("-");
        return `${day}/${month}/${year}`;
    }

    function displayValues(row) {
        const values = row.split(';');
        values.forEach((value, index) => {
            const paragraphId = `p${index}`;
            const paragraph = document.getElementById(paragraphId);
            if (paragraph) {
                paragraph.textContent = value.trim();
            }
        });
    }

    function clearValues() {
        for (let i = 1; i <= 31; i++) {
            const paragraph = document.getElementById(`p${i}`);
            if (paragraph) {
                paragraph.textContent = "";
            }
        }
    }

    loadCSV();
});
