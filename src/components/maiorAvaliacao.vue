<template>
    <div class="conteinerMaior">
        <h2>Jogos com maior avaliação</h2>
        <div class="conteiner">
            <button id="left" @click="moveToLeft">left</button>
            <button id="right" @click="moveToRight">right</button>
            <div class="conteinerMenor" ref="conteinerMenor"> <!-- Adicione a ref aqui -->
                <div class="carrossel" v-for="jogo in objeto" :key="jogo.nome">
                    <img :src="caminho + jogo.Capa + '.png'" alt="imagens jogos" />
                    <h3>{{ jogo.nome }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Carrosel1 } from '../../Images/TodosJogos';

export default {
    data() {
        return {
            objeto: Carrosel1,
            caminho: "../../Images/Jogos com Maior Avaliação/",
            currentPosition: 0,
            slideWidth: 300,
            containerWidth: 0,
        };
    },
    mounted() {
        // Use a ref para acessar o elemento DOM
        const conteinerMenor = this.$refs.conteinerMenor;
        this.containerWidth = conteinerMenor.offsetWidth;
    },
    methods: {
        moveToRight() {
            if (this.currentPosition > -1200) {
                this.currentPosition -= this.slideWidth;
                this.updateCarrosselPosition();
            }
        },
        moveToLeft() {
            console.log('clicou left')
            if (this.currentPosition < 0) {
                this.currentPosition += this.slideWidth;
                this.updateCarrosselPosition();
            }
        },
        updateCarrosselPosition() {
            // Use a ref para acessar o elemento DOM
            const carrossel = this.$refs.conteinerMenor;

            carrossel.style.transform = `translateX(${this.currentPosition}px)`;
        },
    },
};
</script>



<style scoped>
.conteinerMaior {
    margin: 60px 0px;
}

.conteiner {
    overflow: hidden;
}

.conteiner,
.conteinerMenor {
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    align-items: flex-start;
    position: relative;
    transition: transform 0.5s linear;
}

.conteinerMenor {
    margin: 20px 10px;
}

img {
    height: 150px;
    width: 120px;
    object-fit: cover;
    border-radius: 20px;
}


#right {
    width: 25px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5));
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 0px;
    z-index: 1;
    cursor: pointer;
}

#left {
    width: 25px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    border: none;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    z-index: 1;
    cursor: pointer;
}

.carrossel {
    display: flex;
    flex-direction: column;
    margin: 0px 15px;
}

h3 {
    font-size: 15px;
    text-align: center;
    height: auto;
}

h2 {
    padding: 0px 15px;
}
</style>


