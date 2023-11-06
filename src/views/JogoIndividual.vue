<template>
  <div class="conteiner" v-if="jogo" :style="{ backgroundImage: `url(${caminho + jogo.Background + '.png'})` }">
    <div class="overlay">
      <h1>{{ jogo.nome }}</h1>
      <div class="item">
        <div class="content">
          <h2>Sobre {{ jogo.nome }}</h2>
          <p>{{ jogo.descricao }}</p>
        </div>
        <div class="content">
          <h2>Requisitos mínimos</h2>
          <p>{{ jogo.requisitos }}</p>
        </div>
      </div>
      <div class="buttons">
        <div class="itemButton">
          <img src="../../Images/Icones/steam.png" alt="steam">
          <p>Steam R$19,90</p>
          <p>Ir para Loja</p>
        </div>
        <div class="itemButton">
          <img src="../../Images/Icones/epicgames.png" alt="epic games">
          <p>Epic R$46,99</p>
          <p>Ir para Loja</p>
        </div>
        <div class="itemButton">
          <img src="../../Images/Icones/nuvem.png" alt="nuvem">
          <p>Nuvem R$32,89</p>
          <p>Ir para Loja</p>
        </div>
        <div class="itemButton">
          <img src="../../Images/Icones/origin.png" alt="origin">
          <p>Origin R$49,99</p>
          <p>Ir para Loja</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Jogo não encontrado</p>
  </div>
</template>

<script>
import { ObjetoUnico } from '../assets/ObjetoUnico.js';

export default {
  props: ['id'],
  data() {
    const ObjetoUnicoArray = Object.values(ObjetoUnico);
    return {
      jogo: ObjetoUnicoArray.find(jogo => jogo.id === parseInt(this.id)),
      caminho: "../../Images/BackGround/"
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.conteiner {
  position: relative;
  height: 100vh;
  background-size: cover;
}

.overlay {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  text-align: center;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  justify-content: space-around;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 400px;
  height: 200px;
  overflow-y: scroll;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
}

.content::-webkit-scrollbar {
  color: blue;
}

.itemButton {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 64px;
  border: 3px solid #000;
  border-radius: 1000px;
  margin: 20px;
  font-size: 15px;
}

.itemButton>img {
  position: relative;
  top: 0;
  left: -10;
  bottom: 0;
  height: 64px;
  width: 64px;
}

.itemButton > p {
  margin: 10px;
}
</style>