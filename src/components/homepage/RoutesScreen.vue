<script setup>
import MapItem from './RoutesScreenLeaflet.vue';
import TextArrow from '../parts/TextArrow.vue';
import RoutesScreenItem from './RoutesScreenItem.vue';
</script>

<template>
    <div class="w-full relative">
        <MapItem />
        <div class="velo_container h-full map_overcont">
            <div class="flex justify-between">
                <div class="velo_section_title inline-block">
                    <div class="text-gray-900">Маршрути</div>
                </div>
                <div class="filters_cont velo_shadow">
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Покриття</label>
                        <select id="route_land">
                            <option value="-1" selected>Будь-яке</option>
                            <option value="1">Асфальт</option>
                            <option value="2">Сошейка</option>
                            <option value="3">Бездоріжжя</option>
                            <option value="4">Гравій</option>
                            <option value="5">Грунт</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Складність</label>
                        <select id="route_land">
                            <option value="-1" selected>Будь-яка</option>
                            <option value="1">Початкова</option>
                            <option value="2">Легка</option>
                            <option value="3">Середня</option>
                            <option value="4">Висока</option>
                            <option value="5">Дуже висока</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Дистанція</label>
                        <select id="route_land">
                            <option value="-1" selected>Будь-яка</option>
                            <option value="1">Коротка</option>
                            <option value="2">Середня</option>
                            <option value="3">Довга</option>
                            <option value="4">Ультра</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Категорія</label>
                        <select id="route_land">
                            <option value="-1" selected>Будь-яка</option>
                            <option value="1">Прогулянка</option>
                            <option value="2">Туризм</option>
                            <option value="3">Тренування</option>
                            <option value="4">Спорт</option>
                            
                        </select>
                    </div>
                    <div class="select_route_land select_route_land_small bg-emerald-600 h-100 flex items-center justify-center">
                        <TextArrow class="vertical_pos white_color" title_text="Всі маршрути"></TextArrow>
                    </div>
                </div>
            </div>
            <div class="route_cont velo_shadow">
                <RoutesScreenItem class="active_route" />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
                <RoutesScreenItem />
            </div>
        </div>

    </div>
</template>

<style scoped>
.map_overcont{
    z-index: 900;
    pointer-events: none;
    height: 750px;
}
.filters_cont{
    margin-top:80px;
    display: flex;
    height:100%;
    pointer-events: all;
}
.select_route_land{
    width: 160px;
    height: 60px;
    padding: 5px 10px;
    border-right: 1px solid white;
    cursor:pointer;
}
.select_route_land_small{
    border: none;
    width:120px;
    font-weight: normal;
}
.select_route_land > label{
    display: block;
    color: white;
    font-size: 18px;
    transition: all 0.2s ease;
    font-weight: bold;
}
.select_route_land:hover > label{
    font-size: 14px;
    font-weight: normal;
    color: #cbe7de;
}
.select_route_land > select{
    background-color: #059669;
    color: #cbe7de;
    border:none;
    font-size: 14px;
    font-weight: normal;
    width: 100%;
    margin-top: 2px;
    cursor: pointer;
    padding-left:3px;
    transition: all 0.2s ease;
}.select_route_land:hover > select{
    font-size: 18px;
    font-weight: bold;
    color: white;
}
.select_route_land > select:focus, .select_route_land > select:active{
    outline: none;
}
.route_cont{
    width:240px;
    max-height: 500px;
    overflow-y: auto;
    pointer-events: all;
}

@media (max-width:1024px){
    .filters_cont{
        display: none;
    }
}
</style>




