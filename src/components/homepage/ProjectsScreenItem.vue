<script setup>
const props = defineProps({
  projItem: {
    type: Object,
    required: true,
    default: () => {},
  }
});
</script>


<template>
    <div class="cursor-pointer velo_shadow this_item relative">
        <div class="w-full img_div" style="background-image: url('src/assets/img/photo_bikers.jpg');"></div>
        <div class="w-full text-gray-900 txt_div">
            <span>Меслибниця MOVE</span>
        </div>
        <div class="route_type">
            XC
        </div>
    </div>
</template>

<style scoped>
.img_div{
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter:grayscale(.75);
}
.txt_div{
    background-color: white;
    height:25px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: 1;
}
.route_type{
    position: absolute;
    top:0;
    right:0;
    width: 20px;
    height: 20px;
    font-size: 14px;
    background-color: transparent;
    color: white;
    opacity: .5;
    transition: all .1s ease;
}
.this_item:hover .txt_div{
    background-color: #059669;
    color: white;
}
.this_item:hover .img_div{
    filter:grayscale(0);
}
.this_item:hover  .route_type{
    font-size: 20px;
    opacity: 1;
    widows: 30px;
    height: 30px;
    right:10px;
}
</style>