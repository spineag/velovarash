<script setup>
</script>

<template>
    <div class="w-full about_section">
        <div class="about_image"></div>
        <div class="about_cont bg-emerald-600">
            <div class="about_texts">
                <div class="velo_section_title inline-block">
                    <div class="text-white">Веловараш</div>
                </div>
                <div>Неформальна спільнота велосипедистів міста Вараш.</div>
                <br>
                <div>Основні завдання:
                    <ul>
                        <li>пропагування здорового способу життя та сприяння розвитку велосипедного руху, спорту та туризму;</li>
                        <li>дослідження, розробка, класифікація та маркування велосипедних маршрутів;</li>
                        <li>організація походів вихідних днів, локальних велоподорожей, а також тривалих походів;</li>
                        <li>організація й проведення змагань, зустрічей, акцій, велосипедних марафонів та інших масових заходів;</li>
                        <li>та інше...</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="about_btn_cont">
            <div class="velo_container about_showall cursor-pointer">
                    <span>Детальніше</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6 velo_stroke_gray inline-block ml-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> </svg>
                </div>
        </div>
    </div>
</template>

<style scoped>
.about_section{
    display: flex;
    height: 600px;
    position: relative;
}
.about_image{
    width:50%;
    height:100%;
    background-image: url("../../assets/img/photo_bikers.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.about_cont{
    width:50%;
    height:100%;
}
.about_texts{
    max-width: 640px;
    width:100%;
    padding:0 0 0 60px;
    font-size: 16px;
    color: white;
}
.about_texts ul{
    list-style-type: square;
    list-style-position: outside;
}
.about_texts li{
    margin-left: 15px;
}
.about_btn_cont{
    position: absolute;
    bottom: 20px;
    width: 100%;
}
.about_showall{
    color: white;
    stroke: white;
    display: flex;
    justify-content: end;
}
.about_showall svg{
    stroke: white;
}
</style>