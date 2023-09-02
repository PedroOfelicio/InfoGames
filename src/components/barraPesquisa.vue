<template>
    <div class="conteiner">
        <div class="pesquisa">
            <input type="text" placeholder="Proucurar jogo">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                <path
                    d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z">
                </path>
            </svg>
        </div>

    </div>
</template>

<script>

</script>
 

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.conteiner {
    display: flex;
    justify-content: center;
    margin: 20px;
}


.pesquisa {
    border-radius: 10px;
    background-color: #292C30;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0px;
    transition: transform 0.3s;
}

.pesquisa:focus-within {
    transform: scale(1.5);
}

input {
    background: transparent;
    border: 0px solid;
    width: 400px;
    height: 20px;
    text-decoration: none;
    transition: 0.3s;
    outline: none;
    padding: 0px 10px;
    color: #747474;
}



svg {
    width: 20px;
    height: 40px;
    margin: 0px 10px;
}
</style>