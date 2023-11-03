const urlApi = 'https://valorant-api.com/v1/agents';

    new Vue({
      el: '#app',
      data: {
        personaje: {}
      },
      methods: {
        traerInfo() {
          fetch(urlApi)
            .then(response => response.json())
            .then(data => {
              if (data.data.length > 0) {
                this.personaje = data.data[0];
              }
            });
        }
      },
      created() {
        this.traerInfo(); 
      }
    });
    