<script setup>
import MapItem from './RoutesScreenLeaflet.vue'
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
                            <option value="2">Дорога</option>
                            <option value="3">Бездоріжжя</option>
                            <option value="4">Гравій</option>
                            <option value="5">Грунт</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Складність</label>
                        <select id="route_land">
                            <option value="-1" selected>Будь-яка</option>
                            <option value="1">Низька</option>
                            <option value="2">Середня</option>
                            <option value="3">Важка</option>
                            <option value="4">Дуже важка</option>
                        </select>
                    </div>
                    <div class="select_route_land bg-emerald-600">
                        <label for="route_land">Дистанція</label>
                        <select id="route_land">
                            <option value="-1"  selected>Будь-яка</option>
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
                </div>
            </div>
            <div class="route_cont velo_shadow">
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 1</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 2</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 3</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 4</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 5</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 6</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 7</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 8</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 9</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 10</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
                <div class="route_item">
                    <div class="route_item_title">Вараш - Вараш 11</div>
                    <div class="route_item_info">
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                15.5 38.5T194-672Z"/></svg> 
                            <span>35.4 км</span>
                        </div>
                        <div class="route_item_info_point">
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                            <span>130 м</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.map_overcont{
    z-index: 900;
    pointer-events: none;
    height: 880px;
}
.filters_cont{
    margin-top:100px;
    display: flex;
    height:100%;
    pointer-events: all;
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
    font-size: 14px;
}
.select_route_land > select{
    background-color: #059669;
    color: white;
    border:none;
    font-size: 18px;
    font-weight: bold;
    /* text-transform: uppercase; */
    width: 100%;
    margin-top: 2px;
    cursor: pointer;
    padding-left:3px;
}
.select_route_land > select:focus, .select_route_land > select:active{
    outline: none;
}
.route_cont{
    width:240px;
    max-height: 480px;
    overflow-y: auto;
    pointer-events: all;
}
.route_item{
    width: 100%;
    height: 60px;
    background-color: white;
    padding: 5px 10px;
    cursor: pointer;
    border-bottom: 1px solid #e5e7eb;
}
.route_item:last-child{
    border: none;
}
.route_item::after {
    position: absolute;
    content: '›';
    font-size: 32px;
    right: 15px;
    top: 5px;
    color: #9ca3af;
}
.route_item_title{
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
}
.route_item_info_point{
    display: inline-block;
    margin-right: 20px;
}
.route_item_info_point svg{
    width:20px;
    height: 20px;
    margin-right: 5px;
    fill: #9ca3af;
}
.route_item:hover{
    background-color: #059669;
    color: white;
}
.route_item:hover::after{
    color: white;
}
.route_item:hover svg{
    fill: white;
}
</style>




