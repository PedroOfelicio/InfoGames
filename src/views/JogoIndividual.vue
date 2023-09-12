<template>
  <div class="conteiner">
    <h1>{{  objeto[1] }}</h1>
    <div class="item">
      <div>
        <h2>Sobre {{ objeto[1] }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat id deserunt voluptatibus provident,
          sunt incidunt nihil! Iure, veniam labore repellat ullam debitis ipsa placeat porro ipsum ab et culpa?</p>
      </div>
      <div>
        <h2>Requisitos mínimos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat id deserunt voluptatibus provident,
          sunt incidunt nihil! Iure, veniam labore repellat ullam debitis ipsa placeat porro ipsum ab et culpa?</p>
      </div>
    </div>
    <div class="buttons">
      <div class="item1">
        <img src="#" alt="">
        <p>Steam R$19,90</p>
        <p>Ir para Loja</p>
      </div>
      <div class="item2">
        <img src="#" alt="">
        <p>EpicGames R$46,99</p>
        <p>Ir para Loja</p>
      </div>
      <div class="item3">
        <img src="#" alt="">
        <p>Nuuvem R$32,89</p>
        <p>Ir para Loja</p>
      </div>
      <div class="item4">
        <img src="#" alt="">
        <p>Origin R$49,99</p>
        <p>Ir para Loja</p>
      </div>
    </div>
  </div>

</template>

<script>
import { todosOsJogosArray } from '../assets/nomesJogos.js';

export default {
  data(){
    return {
      objeto: todosOsJogosArray,
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

</style>