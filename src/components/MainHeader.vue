<script setup>
</script>

<template>
    <div class="w-full flex items-center header_container">
        <nav class="velo_container flex justify-between items-center">
            <RouterLink to="/" class="mr-20"> <img class="logo_header" src = "../../src/assets/svg/logo.svg" alt=""/> </RouterLink> 
             <!-- https://codepen.io/ephs23/pen/NeQZGx animate logo! -->
            <RouterLink to="/news"><span>Новини</span></RouterLink>
            <RouterLink to="/projects"><span>Проекти</span></RouterLink>
            <RouterLink to="/routes"><span>Маршрути</span></RouterLink>
            <RouterLink to="/about"><span>Веловараш</span></RouterLink>
            <RouterLink to="/help"><span>Допомога</span></RouterLink>
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
/* nav{
    pointer-events: none;
    transition: all .3s ease;
} */
nav>*{
    pointer-events: all;
    text-transform: uppercase;
    color: white;
    font-size: 24px;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    line-height: 1;
}
/* nav:hover span {  opacity: .75; }
nav span:hover {  opacity: 1; } */
nav>*> { position: relative; }
nav span:before {
    position: absolute; 
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: white;
    bottom: 0;
    left: 0;
    transform-origin: left;
    transform: scaleX(0);
    transition: .3s ease-out;
}
nav span:hover:before {
    transform-origin: right;
    transform: scaleX(1);
} 


</style>