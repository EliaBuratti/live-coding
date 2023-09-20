/* 
const { createApp } = Vue

createApp({
  data() {

    return {

        randomNumber : '',
        
        }
    },
    mounted() {
        console.log('montato');
        axios.get('https://flynn.boolean.careers/exercises/api/random/int') //inserisci api https
        
        .then(response => {
            console.log(response);

            this.randomNumber = response.data.response;
        })
    }
}).mount('#app') */


/* 
Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc. 
Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande. */


const { createApp } = Vue

createApp({
  data() {

    return {

        playerNumber : '',
        pcNumber : '' ,
        
        }
    },
    mounted() {
        console.log('montato');
        axios.get('https://flynn.boolean.careers/exercises/api/random/int') //inserisci api https
        
        .then(response => {
            console.log(response);

            this.playerNumber = response.data.response;
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/int') //inserisci api https
        
        .then(response => {
            console.log(response);

            this.pcNumber = response.data.response;
        })

        .catch(error => {
            console.log(error);
        })

        //se devo scrivere tante volte, posso usare un for
        
    }
}).mount('#app')