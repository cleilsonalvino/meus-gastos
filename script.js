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


    const toggleThemeButton = document.getElementById('toggle-theme');

    toggleThemeButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Opcional: Salvar a preferência de tema no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    toggleThemeButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });