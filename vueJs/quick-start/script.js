
  const { createApp } = Vue

  console.log(Vue); //visualizzo tutte le funzionalità in console

  createApp({
    data() {

      return {
        userName:'',
        userSurname:'',
        message:'hello Vue',
        name:'Elia',
        css:'bg-dark text-white',
        titleColor: "text-green",
        saluti (name) {
            alert('ciaooooooo' + name) //se name fosse stato come username, quando l'utente scrive appare quello che ha scritto al clicke del pulsante
        },
      }

    },

    //function
    methods: {
        updateColor () {
            if (this.titleColor === "text-green") {
                this.titleColor = "text-purple";
            } else {
                this.titleColor = "text-green";
            }         
        }
    },
  }).mount('#app')
