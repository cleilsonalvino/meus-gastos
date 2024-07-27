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
                    <td>
                        <button class="edit" data-id="${row.id}">Editar</button>
                        <button class="delete" data-id="${row.id}">Deletar</button>
                    </td>
                `;
                tbody.appendChild(tr);

                const total = document.querySelector("#total");
                total.innerHTML = row.Total
            });

            document.querySelectorAll('.edit').forEach(button => {
                button.addEventListener('click', handleEdit);
            });

            document.querySelectorAll('.delete').forEach(button => {
                button.addEventListener('click', handleDelete);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}

function handleEdit(event) {
    const id = event.target.getAttribute('data-id');
    alert('Editar funcionalidade ainda não implementada para o ID: ' + id);
}

function handleDelete(event) {
    const id = event.target.getAttribute('data-id');
    if (confirm('Você tem certeza que deseja deletar este registro?')) {
        fetch(`${SHEETDB_URL}/id/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchData(); // Recarregar dados após deletar
        })
        .catch(error => console.error('Erro ao deletar registro:', error));
    }
}


