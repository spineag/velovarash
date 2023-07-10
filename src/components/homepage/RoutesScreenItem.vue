<script setup>

</script>


<template>
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
</template>

<style scoped>
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
    font-size: 24px;
    right: 20px;
    top: 10px;
    color: #d1d5db;
    transition: all .2s ease;
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
    color: #059669;
    background-color: #F8F7F4;
}
.route_item:hover::after{
    color: #059669;
    font-size: 32px;
    right: 12px;
    top: 5px;
}
.route_item:hover svg{
    fill: #059669;
}
.route_item.active_route{
    background-color: #059669;
    color: white;
}
.route_item.active_route::after{
    color: white;
}
.route_item.active_route svg{
    fill: white;
}
</style>