<script setup>
</script>

<template>
    <div class="w-full about_section">
        <div class="about_image"></div>
        <div class="about_cont bg-emerald-600">
            <div class="about_texts">
                <div class="velo_section_title inline-block">
                    <div class="text-white">Спільнота</div>
                </div>
                <div><span class="about_subtitle">Веловараш</span> - неформальна спільнота велосипедистів міста Вараш.</div>
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
    max-width: 512px;
    width:100%;
    padding:0 0 0 60px;
    font-size: 16px;
    color: white;
}
.about_subtitle{
    font-weight: bold;
    font-size: 24px;
}
</style>