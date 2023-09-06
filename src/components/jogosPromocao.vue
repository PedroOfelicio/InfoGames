<template>
    <div class="conteinerMaior">
        <h2>Jogos de Promoção</h2>
        <div class="conteiner">

            <div class="item">
                <div class="carrosel" v-for="jogo in objeto" :key="jogo.nome">
                    <img :src="caminho + jogo.Capa + '.png'" alt="jogos de promoção">
                    <h3>{{ jogo.nome }}</h3>
                </div>
            </div>
            <hr>
            <div class="item">
                <div class="carrosel" v-for="jogo in objeto2" :key="jogo.nome">
                    <h3>{{ jogo.nome }}</h3>
                    <img :src="caminho + jogo.Capa + '.png'" alt="jogos de promoção">
                </div>
            </div>

        </div>
    </div>
</template>


<script scoped>
import { JogosDePromocao, JogosDePromocao2 } from '../../Images/TodosJogos';

export default {
    data() {
        return {
            objeto: JogosDePromocao,
            objeto2: JogosDePromocao2,
            caminho: "../../Images/Jogos de Promoção/"
        }
    }
}

</script>


<style scoped>

.conteinerMaior {
    padding: 60px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.conteiner {
    display: flex;
    justify-content: space-between;
}

.item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0px;
    width: 300px;
}

.carrosel {
    display: flex;
    width: auto;
}

img {
    width: 150px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
}

h2 {
    text-align: center;
    margin: 40px 0px;
}

h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 15px;
    height: auto;
    width: 100px;
}

hr {
    height: 1040px;
    border-color: rgba(255, 255, 255, 0.178);
}
</style>