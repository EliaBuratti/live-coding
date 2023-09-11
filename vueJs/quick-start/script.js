
  const { createApp } = Vue

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
            alert('ciaooooooo' + name)
        },
      }

    },

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
