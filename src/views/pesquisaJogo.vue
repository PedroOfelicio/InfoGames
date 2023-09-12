<template>
    <barraPesquisa></barraPesquisa>
    <!-- <div class="conteiner">
        <div class="carrossel" v-for="jogo in objeto" :key="jogo.nome">
            <img :src="caminho + jogo.Capa + '.png'" alt="imagens jogos" />
            <h3>{{ jogo.nome }}</h3>
        </div>
    </div> -->
</template>

<script>
import barraPesquisa from '../components/barraPesquisa.vue';




export default {
    data() {
        return {



        }
    },
    components: {
        barraPesquisa,
    },
}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    border: 0;
}

.conteiner {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
}

.carrossel {
    margin: 10px;
}

img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
}

h3 {
    text-align: center;
    font-size: 16px;
}

</style>