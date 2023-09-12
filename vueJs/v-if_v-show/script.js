const { createApp } = Vue

console.log(Vue); //visualizzo tutte le funzionalità in console

createApp({
  data() {

    return {
        cliccato: true,
        cliccatoSecondo: false,

        items: [
            {
                id: 1000,
                message: 'ciao user Vue',
                bool: true,
                job: 'developer',
            },
            {
                id: 1001,
                message: 'ciao user secondo Vue',
                bool: true,
                job: 'CEO',
            },
            {
                id: 1002,
                message: 'ciao user terzo Vue',
                bool: true,
                job: 'magazziniere',
            },
            {
                id: 1003,
                message: 'ciao user quarto Vue',
                bool: true,
                job: 'back-office',
            },
            {
                id: 1004,
                message: 'ciao user quinto Vue',
                bool: true,
                job: 'impiegato',
            }
        ]
      
    }

  },

  //function
  methods: {
     
      }
  },
).mount('#app')
