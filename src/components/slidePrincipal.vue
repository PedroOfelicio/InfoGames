<template>
    <div class="slider">
        <div class="slide" :style="slideStyle" v-for="(jogo, index) in objeto" :key="index">
            <img :src="caminho + jogo.Capa + '.png'" :alt="jogo.Capa" >
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
            this.currentIndex = (this.currentIndex + 1) % Object.keys(this.$data).length;
        }
    },
    
};
</script>
  
<style scoped>
.slider {
    display: flex;
    overflow: hidden;
    margin: 40px 0px;
    width: 1200px;
    border-radius: 20px;
}

.slide {
    display: flex;
    transition: transform 2s linear;
    width: 100%;
}

.slide img {
    width: 1200px;
    height: 300px;
}
</style>
