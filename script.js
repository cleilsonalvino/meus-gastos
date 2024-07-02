document.getElementById('openSheetsButton').addEventListener('click', function () {
            // ID da planilha do Google Planilhas fornecida
            var spreadsheetId = '1OAd1O-wpUJYcK03Wplq2cYyVtuOSFYwHH9sgSBuHmNU';
            
            var webUrl = 'https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/edit';
            
    
                window.location.href = webUrl;
        });

    const sheetdbUrl = 'https://sheetdb.io/api/v1/w08mrc2fae3wv'
    async function Enviar() {
      const item = document.getElementById('item').value;
      const valor = parseFloat(document.getElementById('valor').value);
      const data = document.getElementById('data').value;

      setTimeout(()=>{
      loader.style.opacity = '0'
      loader.style.visibility = 'hidden'  
      
      }, 2500)

      const loader = document.getElementById('loader');
      loader.style.opacity = '1'
      loader.style.visibility = 'visible'   


      if (!item || !valor || !data) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const newData = {
        data: [
          {
            Data: data,
            Item: item,
            Valor: valor
          }
        ]
      };

      try {
        const response = await fetch(sheetdbUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
        });

        if (response.ok) {
          setTimeout(()=>{
            okk.style.opacity = '0'
            okk.style.visibility = 'hidden'  
            
            }, 3000)
            okk.style.opacity = '1'
            okk.style.visibility = 'visible'  
          // Limpar os campos após o envio
          document.getElementById('item').value = '';
          document.getElementById('valor').value = '';
          document.getElementById('data').value = '';
        } else {
          alert('Erro ao enviar dados.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar dados.');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      const uploadBtn = document.getElementById('uploadBtn');
      const resetBtn = document.getElementById('resetBtn');
      const defaultImageURL = 'images/fundo.jpg'; // URL da imagem padrão
  
      // Função para carregar a imagem de fundo do localStorage ou a padrão
      function loadBackgroundImage() {
          const storedImage = localStorage.getItem('backgroundImage');
          if (storedImage) {
              document.body.style.backgroundImage = `url(${storedImage})`;
          } else {
              document.body.style.backgroundImage = `url(${defaultImageURL})`;
          }
      }
  
      // Carregar a imagem de fundo ao iniciar
      loadBackgroundImage();
  
      // Adicionar evento de mudança para o botão de upload
      uploadBtn.addEventListener('change', function (event) {
          const file = event.target.files[0];
          if (file) {
              const reader = new FileReader();
              reader.onload = function (e) {
                  const dataURL = e.target.result;
                  localStorage.setItem('backgroundImage', dataURL);
                  document.body.style.backgroundImage = `url(${dataURL})`;
              };
              reader.readAsDataURL(file);
          }
      });
  
      // Adicionar evento de clique para o botão de reset
      resetBtn.addEventListener('click', function () {
          localStorage.removeItem('backgroundImage');
          loadBackgroundImage();
      });
  });
  