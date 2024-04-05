<script setup>
import TextArrow from '../parts/TextArrow.vue';
import AboutPhotoGallery from '../homepage/AboutPhotoGallery.vue';
</script>

<template>
    <div class="w-full about_section">
        <AboutPhotoGallery />
        <div class="about_cont bg-emerald-600">
            <div class="about_texts">
                <div class="velo_section_title inline-block">
                    <div class="text-white">Веловараш</div>
                </div>
                <div>Неформальна спільнота велосипедистів міста Вараш. <br>Даний веб-ресурс - агрегатор подій, знань та емоцій на велотематику.</div>
                <br>
                <div>Основні завдання:
                    <ul>
                        <li>пропагування здорового способу життя та сприяння розвитку велосипедного руху, спорту та туризму;</li>
                        <li>дослідження, розробка, класифікація та маркування велосипедних маршрутів;</li>
                        <li>організація й проведення змагань, зустрічей, акцій, квестів, велосипедних марафонів та інших масових заходів;</li>
                        <li>і так далі...</li>
                    </ul>
                    Кожен може додати щось своє!
                </div>
            </div>
        </div>
        <div class="about_btn_cont">
            <div class="velo_container flex justify-end">
                <TextArrow class="white_color" title_text="Детальніше"></TextArrow>
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
    bottom: 80px;
    width: 100%;
}
@media (max-width:1024px){
    .cont{
        display: none;
    }
    .about_cont{
        width: 100%;
    }
}

</style>