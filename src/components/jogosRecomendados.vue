<template>
    <div class="conteinerMaior">
        <h2>Jogos Recomendados</h2>
        <div class="conteiner">
            <div class="carrosel" v-for="jogo in objeto" :key="jogo.nome">
                <img :src="caminho + jogo.Capa + '.png'" alt="jogos recomendados">
            </div>
        </div>
    </div>
</template>


<script>
import { JogosRecomendados } from '../../Images/todosJogos';

export default {
    data() {
        return {
            objeto: JogosRecomendados,
            caminho: "../../Images/Jogos Recomendados/"
        }
    }
}

</script>


<style scoped>
.conteinerMaior {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px;
    flex-direction: column;
}

.conteiner {
    display: flex;
    width: auto;
    padding: 0px;
    margin: 0px;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 800px;
}

.carrosel {
    display: flex;

}

img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    margin: 0px;
    padding: 0px;
    margin: 15px;
    border-radius: 25px;
}
</style>