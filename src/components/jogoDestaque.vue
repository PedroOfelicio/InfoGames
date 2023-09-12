<template>
    <div class="conteinerMaior">
        <h2>Jogo em Destaque</h2>
        <div class="conteiner">

            <div class="item1">
                <img src="../../Images/Jogos com Maior Avaliação/Carrosel1_Valheim.jpeg" alt="Valheim">
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
    background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0),
    rgba(156, 156, 156, 0.116),
    rgba(255, 255, 255, 0));
    border-radius: 15px;
    height: auto;
}

.item1 {
    width: 50%;
    height: auto;
}

.item1 > img {
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
    height: 220px;
}

h3 {
    font-size: 36px;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
}
</style>