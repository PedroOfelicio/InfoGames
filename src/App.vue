
<template>
  <navBar  v-if="$route.name !== 'jogo'" />
  <main>
    <RouterView></RouterView>
  </main>
  <footer  v-if="$route.name !== 'jogo'">
    <a href="#">Envie uma mensagem ao suporte</a>
    <a href="#">Políticas de Privacidade</a>
    <a href="#">Comunidade</a>
    <a href="#">Tira dúvidas</a>
  </footer>
</template>

<script>

import navBar from './components/navBar.vue';


export default {
  components: {
    navBar,

  }
}
</script>