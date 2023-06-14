<script setup>
import MapItem from './RoutesScreenLeaflet.vue'
</script>

<template>
    <div class="w-full relative">
        <MapItem />
        <div class="velo_container h-full map_filters">
            <div class="flex justify-between">
                <div class="velo_section_title inline-block">
                    <div class="text-gray-900">Маршрути</div>
                </div>
                <div class="filters_cont velo_shadow">
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Покриття</label>
                        <select id="route_land">
                            <option value="1" selected>Різне</option>
                            <option value="2">Асфальт</option>
                            <option value="3">Дорога</option>
                            <option value="4">Бездоріжжя</option>
                            <option value="5">Гравій</option>
                            <option value="6">Грунт</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Складність</label>
                        <select id="route_land">
                            <option value="1">Низька</option>
                            <option value="2" selected>Середня</option>
                            <option value="3">Важка</option>
                            <option value="4">Дуже важка</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Дистанція</label>
                        <select id="route_land">
                            <option value="1">Коротка</option>
                            <option value="2" selected>Середня</option>
                            <option value="3">Довга</option>
                            <option value="4">Ультра</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Категорія</label>
                        <select id="route_land">
                            <option value="1">Прогулянка</option>
                            <option value="2">Туризм</option>
                            <option value="3" selected>Тренування</option>
                            <option value="4">Спорт</option>
                            
                        </select>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.map_filters{
    z-index: 900;
}
.filters_cont{
    margin-top:100px;
    display: flex;
    height:100%;
}
.select_route_land{
    width: 160px;
    height: 60px;
    padding: 5px 10px;
    border-right: 1px solid white;
}
.select_route_land:last-child{
    border: none;
}
.select_route_land > label{
    display: block;
    color: #cbe7de;
    font-size: 13px;
}
.select_route_land > select{
    background-color: #059669;
    color: white;
    border:none;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    width: 100%;
    margin-top: 2px;
    cursor: pointer;
}
.select_route_land > select:focus, .select_route_land > select:active{
    outline: none;
}

</style>




