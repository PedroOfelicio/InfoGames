<template>
    <header>
        <h1 id="Logo">InfoGames</h1>
        <div class="ladoDireito">
            <img src="../../Images/Icones/IconeSuporte.png" alt="suporte">
            <!-- erro na img  <img src="../../Images/Icones/IconeGlobal.png" alt="global"> -->
            <a href="#" class="login">login</a>
            <a href="#" class="signin">sign in</a>
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
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
}

img {
    width: 30px;
    object-fit: cover;
}

.ladoDireito {
    display: flex;
    justify-content: space-around;
    width: 300px;
}

a {
    border-radius: 10px;
    border: 0px solid;
    width: 100px;
    color: white;
    text-align: center;
}

.login {
    background: transparent;
}

.login, .signin{
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login:hover {
    background-color: rgb(82, 0, 204);
}

.signin {
    background-color: rgb(0, 0, 255);
}

.signin:hover {
    background-color: rgb(82, 0, 204);
}
</style>