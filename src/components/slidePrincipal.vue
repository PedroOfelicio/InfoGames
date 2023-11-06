<template>
    <div class="conteiner">
        <div class="slider">
            <div class="slide" :style="slideStyle" v-for="(jogo, index) in objeto" :ref="index">
                <img :src="caminho + jogo.Capa + '.png'" :alt="jogo.Capa">
            </div>
        </div>
    </div>
</template>
  
<script>
import { slideJogos } from '../../Images/TodosJogos';

export default {
    data() {
        return {
            objeto: slideJogos,
            caminho: "../../Images/Slide Principal/",
            currentIndex: 0
        };
    },
    computed: {
        slideStyle() {
            return {
                transform: `translateX(-${this.currentIndex * 100}%)`
            };
        }
    },
    mounted() {
        this.sliderInterval = setInterval(this.nextSlide, 6000);
    },
    beforeDestroy() {
        clearInterval(this.sliderInterval);
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % Object.keys(this.$refs).length;
        }
    },

};
</script>
  
<style scoped>
.conteiner {
    display: flex;
    justify-content: center;
    margin: 30px 20px;
    height: 300px;
}

.slider {
    display: flex;
    overflow: hidden;
    width: 1200px;
    height: 300px;
    border-radius: 20px;
}

.slide {
    display: flex;
    transition: transform 2s linear;
    width: 1200px;
    height: 300px;
}

.slide img {
    width: 1200px;
    height: 300px;
    object-fit: fill;
}
</style>
