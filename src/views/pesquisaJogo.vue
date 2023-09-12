<template>
    <div class="conteiner">
        <barraPesquisa></barraPesquisa>
    </div>
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
    align-items: center;
    flex-direction: column;
}
</style>