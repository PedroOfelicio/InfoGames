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
    height: 40px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
    background: linear-gradient(to bottom, rgb(54, 65, 219), rgb(19, 15, 129), rgb(5, 4, 32));
}


.conteiner {
    display: flex;
    justify-content: space-around;
    width: 50%;
}

</style>