<template>
  <div class="conteinerMaior" :style="{'z-index': zIndexValue }">
    <div class="conteiner">
      <div class="pesquisa">
        <input id="input" type="text" placeholder="Procurar jogo" v-model="pesquisa" @input="filtrarJogos">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
          <path
            d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z">
          </path>
        </svg>
      </div>
      <div class="result">
        <ul v-if="pesquisa !== ''">
          <li v-for="jogo in jogosFiltrados" :key="jogo">
            <a href="#" target="_blank">{{ jogo }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { todosOsJogosArray } from '../assets/nomesJogos';

export default {
  data() {
    return {
      pesquisa: "",
      jogosFiltrados: todosOsJogosArray,
      zIndexValue: 1000
    };
  },
  methods: {
    filtrarJogos() {
      const termoPesquisa = this.pesquisa.toLowerCase();

      this.jogosFiltrados = todosOsJogosArray.filter(jogo => jogo.toLowerCase().includes(termoPesquisa));

    }
  }
};
</script>

 

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.conteinerMaior {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}


.conteiner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  transition: transform 0.3s;
  z-index: 1;
  position: relative;
  width: 400px;
}


.pesquisa,
li {
  border-radius: 10px;
  background-color: #292C30;
  width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;

}

.conteiner:focus-within {
  transform: scale(1.2);
}

input,
ul {
  background: transparent;
  border: 0px solid;
  width: 400px;
  height: 20px;
  text-decoration: none;
  transition: 0.3s;
  outline: none;
  padding: 0px 10px;
  color: #747474;

}


ul {
  display: flex;
  flex-direction: column;
}

li {
  background-color: #1a1a1aea;
}

a {
  margin: 5px 20px;
  color: #747474;
  width: 400px;
  height: 20px;
}

svg {
  width: 20px;
  height: 40px;
  margin: 0px 10px;
}
</style>