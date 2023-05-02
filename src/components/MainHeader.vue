<script setup>
</script>

<template>
    <div class="w-full flex items-center header_container">
        <nav class="velo_container flex justify-between items-center">
            <RouterLink to="/" class="mr-20"> <img class="logo_header" src = "../../src/assets/svg/logo.svg" alt=""/> </RouterLink>
            <RouterLink to="/news">Стрічка</RouterLink>
            <RouterLink to="/projects">Проекти</RouterLink>
            <RouterLink to="/routes">Маршрути</RouterLink>
            <RouterLink to="/about">Спільнота</RouterLink>
            <RouterLink to="/help">Допомога</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.header_container{
    height: 100px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,0));
}
.logo_header{
    width:60px;
    height:60px;
}
nav>*{
    text-transform: uppercase;
    color: white;
    font-size: 24px;
}
nav>*:hover{
    text-decoration: underline;
}
</style>