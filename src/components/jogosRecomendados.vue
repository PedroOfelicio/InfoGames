<template>
    <div class="conteinerMaior">
        <h2>Jogos Recomendados</h2>
        <div class="conteiner">
            <div class="carrosel" v-for="jogo in objeto" :key="jogo.nome">
                <router-link :to="{ name: 'jogo', params: { id: jogo.id.toString() } }">
                    <img :src="caminho + jogo.Capa + '.png'" alt="jogos recomendados">
                    <p>{{ jogo.nome }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import { JogosRecomendados } from '../../Images/TodosJogos';

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
    width: 1000px;
}

.carrosel {
    display: flex;
    position: relative;
    text-align: center;
}

img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    margin: 0px;
    padding: 0px;
    margin: 15px;
    border-radius: 20px;
    transition: filter 0.4s;
}

p {
    display: none;
}

.carrosel:hover p {
    display: inline;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
}

.carrosel:hover img {
    filter: brightness(20%);
    border: 3px solid rgb(255, 255, 255);
    transform: scale(1.2);
}
</style>