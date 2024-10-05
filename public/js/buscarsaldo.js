const mostrarSaldo = document.getElementById('mostrarSaldo');
    
mostrarSaldo.addEventListener('click', () => {
  const sheetdbUrl = 'https://sheetdb.io/api/v1/w08mrc2fae3wv?sheet=Entradas';

  fetch(sheetdbUrl)
    .then(response => response.json())
    .then(data => {
      
      // Verifique se os dados foram retornados
      if (data.length > 0) {
        const dadoEspecifico = data[0].Saldo; // Acesse a coluna "Saldo"

        if (dadoEspecifico !== undefined) {
          document.getElementById("saldoExibido").innerText = `Saldo: ${dadoEspecifico}`;
        } else {
          document.getElementById("saldoExibido").innerText = "Campo 'Saldo' não encontrado na linha 2!";
        }
      } else {
        document.getElementById("saldoExibido").innerText = "Dado não encontrado na linha 2!";
      }
    })
    .catch(error => {
      console.error("Erro ao buscar os dados:", error);
      document.getElementById("saldoExibido").innerText = "Erro ao buscar o dado!";
    });
});