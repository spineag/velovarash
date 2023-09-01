<script setup>
</script>

<template>
    <div class="w-full flex items-center header_container">
        <nav class="velo_container flex justify-between items-center">
            <!-- <RouterLink to="/" class="mr-20"> <img class="logo_header" src = "../../src/assets/svg/logo.svg" alt=""/> </RouterLink>  -->
            <RouterLink to="/" class="mr-20">
                <div class="logo_header_cont">
                    <img class="logo_header" src = "../../src/assets/svg/logo_inner.svg" alt=""/>
                </div>
            </RouterLink>

            <RouterLink to="/news" class="text_link"><span>Новини</span></RouterLink>
            <RouterLink to="/projects" class="text_link"><span>Проекти</span></RouterLink>
            <RouterLink to="/routes" class="text_link"><span>Маршрути</span></RouterLink>
            <RouterLink to="/about" class="text_link"><span>Веловараш</span></RouterLink>
            <RouterLink to="/help" class="text_link"><span>Допомога</span></RouterLink>
            <div class="burger_link_cont">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.header_container{
    height: 100px;
    background-image: linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,0));
}
.logo_header_cont{
    width:60px;
    height:60px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo_header{
    width:60px;
    height:60px;
    transition: .3s;
}
.logo_header_cont:hover .logo_header{ transform: rotateY(180deg); }
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
.burger_link_cont{
    display: none;
    
}
.burger_link_cont svg{
    stroke: white;
    width: 60px;
    height: 60px;
}

@media (max-width: 1280px) {  /* 1024, 768, 640*/
  .text_link span{
    font-size:18px;
    display: inline;
  }
}
@media (max-width: 1024px){
    .text_link{
        display: none;
    }
    .burger_link_cont{
        display: inline-block;
    }
}

</style>