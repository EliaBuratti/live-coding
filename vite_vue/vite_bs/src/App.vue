<script>
import HelloWorld from './components/HelloWorld.vue';
import template from './components/template.vue';
export default {

  name: 'app',
  data() {
    return {

    }
  },
  components: { // da inserire tutti gli import che faccio
    HelloWorld,
    template,
  }

}
</script>

<template>
  <h1>ciao mondo</h1>
  <HelloWorld msg="Vite + Vue" />
  <template></template>
</template>

<!-- <style lang="scss" scoped>  scoped limita le classi alla singola app   lang="scss" serve per far riconoscere al browser che è scritto in sass  
 @use './assets/scss/app.scss' posso importare il scss in questo modo
per importare scss @use ' percorso scss(non serve mettere .scss) ' + as + *  (asterisco intende tutto) + ;

</style> -->

<style lang="scss" scoped>
@use './assets/scss/partials/variable' as *;

h1 {
  color: $tx-color;
}
</style>




<!-- 
  per installare sass devi scrivere nel terminale questo

  npm add -D sass
 -->

<!-- vbase mi crea il template -->

