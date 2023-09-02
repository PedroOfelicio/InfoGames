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
               // transform: `translateX(-${this.currentIndex * 100}%)`
            };
        }
    },
    mounted() {
        this.sliderInterval = setInterval(this.nextSlide, 10000);
    },
    beforeDestroy() {
        clearInterval(this.sliderInterval);
    },
    methods: {
        nextSlide() {
            console.log(this.objeto.length);
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
}

.slide {
    display: flex;
    transition: transform 5s ease-in-out;
    width: auto;
}

.slide img {
    width: 800px;
    height: auto;
    border-radius: 20px;
}
</style>
