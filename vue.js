const urlApi = 'https://valorant-api.com/v1/agents';

const app = Vue.createApp({
  data() {
    return {
      personaje: {}
    };
  },
  methods: {
    traerInfo() {
      fetch(urlApi)
        .then(response => response.json())
        .then(data => {
          if (data.data.length > 0) {
            this.personaje = data.data[5];
          }
        });
    }
  },
  created() {
    this.traerInfo();
  }
});

app.mount('#app');

    