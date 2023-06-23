<script setup>
</script>

<template>
    <div class="w-full media_div bg-emerald-600 ">
        <div class="velo_container h-full">
            <div class="absolute w-full flex items-end justify-between bottom_line">
                <img src = "../../../src/assets/svg/logo_as_bg.svg" alt=""/>
                <!-- <span>м. Вараш</span> -->
            </div>

        </div>
    </div>
</template>

<style scoped>
    .media_div{
        height:calc(100vh - 80px);
        background-image: url("../../assets/img/photo_bikers.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .bottom_line{
        bottom: 80px;
    }
    .bottom_line img{
        height:100px;
    }
    .bottom_line span{
        font-size: 30px;
        font-weight: bold;
        color:white;
        line-height: 1;
    }
</style>