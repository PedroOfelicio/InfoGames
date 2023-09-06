<template>
    <div class="conteinerMaior">
        <h2>Jogos de Puzzle</h2>
        <div class="conteiner">
            <div class="carrosel" v-for="jogo in objeto" :key="jogo.nome">
                <img :src="caminho + jogo.Capa + '.png'" alt="imagens jogos">
                <h3>{{ jogo.nome }}</h3>
            </div>
        </div>
    </div>
</template>




<script>
import { Carrosel3 } from '../../Images/TodosJogos';

export default {
    data() {
        return {
            objeto: Carrosel3,
            caminho: "../../Images/Jogos De Puzzle/",

        }
    }
}

</script>

<style scoped>
.conteinerMaior {
    margin: 60px 0px;
}

.conteiner {
    display: flex;
    margin: 30px 0px;
    flex-direction: row;
    width: auto;
    height: auto;
    align-items: flex-start;
    overflow: hidden;
}

img {
    height: 150px;
    width: 120px;
    object-fit: cover;
    border-radius: 20px;
}

.carrosel {
    display: flex;
    flex-direction: column;
    margin: 0px 15px;
}

h3 {
    text-align: center;
    font-size: 15px;
}

h2 {
    padding: 0px 15px;
}
</style>


