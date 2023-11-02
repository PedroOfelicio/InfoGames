<template>
    <header>
        <h1 id="Logo">InfoGames</h1>
        <div class="conteiner">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/SearchGame">Todos os Jogos</RouterLink>
        </div>
    </header>
</template>

<script>

export default {
    
}
</script>

<style scoped>
header {
    display: flex;
    width: 97%;
    height: 25px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
    background: blue;
}


.conteiner {
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 0px 30px;
}

</style>