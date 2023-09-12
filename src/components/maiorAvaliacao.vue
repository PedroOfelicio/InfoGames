<template>
    <div class="conteinerMaior">
        <h2>Jogos com maior avaliação</h2>
        <div class="conteiner">
            <button id="left" @click="moveToLeft"></button>
            <button id="right" @click="moveToRight">            </button>
            <div class="conteinerMenor" ref="conteinerMenor"> 
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
    height: 220px;
    top: 10px;
    background: linear-gradient(to left, rgb(0, 81, 255), rgba(0, 0, 0, 0));
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0px;
    z-index: 1;
    cursor: pointer;
}

#left {
    width: 25px;
    position: absolute;
    left: 0;
    top: 10px;
    height: 220px;
    background: linear-gradient(to right, rgb(0, 81, 255), rgba(0, 0, 0, 0));
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
    height: 45px;
    overflow: hidden;
}

h2 {
    padding: 0px 15px;
}
</style>


