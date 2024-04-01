<script setup>
</script>

<template>
    <div class="w-full media_div bg-emerald-600 ">
        <div class="velo_container h-full">
            <div class="temp_work">
                <div>Сайт в стані розробки.</div>
                <div>Інформація тестова.</div>
            </div>
            <div class="bottom_line">
                <!-- <img src = "../../../src/assets/svg/logo_as_bg.svg" alt=""/> -->
                <img src = "https://raw.githubusercontent.com/spineag/velovarash/master/src/assets/svg/logo_as_bg.svg" alt=""/>
                <!-- <span>м. Вараш</span> -->
            </div>

        </div>
    </div>
</template>

<style scoped>
    .media_div{
        height:calc(100vh - 80px);
        /* background-image: url("../../assets/img/photo_main.jpeg"); */
        background-image: url("https://raw.githubusercontent.com/spineag/velovarash/master/src/assets/img/photo_main.jpeg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .temp_work{
        position: absolute;
        top: 240px;
        width: 100%;
        text-align: center;
        filter: drop-shadow(0 4px 4px black);
    }
    .temp_work>div{
        width:fit-content;
        margin: 0px auto;
        padding:30px 40px;
        font-size: 42px;
        font-weight: 900;
        color: #d63227;
        background: repeating-linear-gradient(-77deg, rgb(255, 210, 10), rgb(255, 210, 10) 80px, black 80px, black 160px);
        clip-path: polygon(0% 100%, 4% 20%, 100% 0%, 96% 80%);
        line-height:1;
    }
    .bottom_line{
        bottom: 80px;
        position: absolute;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
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

    @media (max-width: 1024px) {  /* 1024, 768, 640*/
        .bottom_line img{
            height:80px;
        }
    }

    @media (max-width:768px){
        
    }

    @media (max-width:640px){
        .bottom_line{
            justify-content: center;
            width: calc(100% - 40px);
            bottom: 40px;
        }
        .bottom_line img{
            width:100%;
        }
    }

    @media (max-width:480px){
        .bottom_line img{
            height:auto;
            
        }
    }
</style>