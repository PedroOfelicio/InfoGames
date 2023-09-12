
<template>

    <slidePrincipal></slidePrincipal>
    <h1 id="titulo">InfoGames, o seu portal para o mundo dos JOGOS</h1>
    <maiorAvaliacao></maiorAvaliacao>
    <jogosSobrevivencia></jogosSobrevivencia>
    <jogosPuzzle></jogosPuzzle>
    <jogosRecomendados></jogosRecomendados>
    <jogoDestaque></jogoDestaque>
    <jogosRecentemente></jogosRecentemente>
    <jogosPromocao></jogosPromocao>
</template>
  
<script>


import slidePrincipal from '../components/slidePrincipal.vue';
import maiorAvaliacao from '../components/maiorAvaliacao.vue';
import jogosSobrevivencia from '../components/jogosSobrevivencia.vue';
import jogosPuzzle from '../components/jogosPuzzle.vue';
import jogosRecomendados from '../components/jogosRecomendados.vue';
import jogoDestaque from '../components/jogoDestaque.vue';
import jogosRecentemente from '../components/jogosRecentemente.vue';
import jogosPromocao from '../components/jogosPromocao.vue';

export default {
    components: {
        slidePrincipal,
        maiorAvaliacao,
        jogosSobrevivencia,
        jogosPuzzle,
        jogosRecomendados,
        jogoDestaque,
        jogosRecentemente,
        jogosPromocao,
    }
}
</script>