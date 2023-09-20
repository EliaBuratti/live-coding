
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
        })
    }
}).mount('#app')
