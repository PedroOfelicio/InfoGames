<template>
    <div class="conteinerMaior">
        <h2>Jogo em Destaque</h2>
        <div class="conteiner">

            <div class="item1">
                <img src="../../Images/Jogos com Maior Avaliação/Carrosel1_Valheim.png" alt="Valheim">
            </div>
            <div class="item2">
                <h3>Valheim</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque consectetur eaque, odio
                    ipsum quas officiis repudiandae tempora quia nisi odit doloribus veritatis magnam culpa minima? Eveniet
                    minus et iure.</p>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style scoped>

.conteinerMaior {
    margin: 70px 0px;
}

.conteiner {
    display: flex;
    flex-direction: row;
    background-color: #292C30;
    border-radius: 15px;
}

.item1 {
    width: 50%;

}

.item1>img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.item2 {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    text-align: justify;
}

h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
}
</style>