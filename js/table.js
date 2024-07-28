const SHEETDB_URL = "https://sheetdb.io/api/v1/w08mrc2fae3wv"; // Substitua pela sua URL da API do SheetDB

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    fetch(SHEETDB_URL)
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector("#data-table tbody");
            tbody.innerHTML = '';
            data.forEach((row, index) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.id}</td>
                    <td>${row.Data}</td>
                    <td>${row.Item}</td>
                    <td>${row.Valor}</td>
                `;
                tbody.appendChild(tr);
            });

            const total = document.querySelector("#total");
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}