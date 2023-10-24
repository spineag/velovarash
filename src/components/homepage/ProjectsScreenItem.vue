<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  projItem: {
    type: Object,
    required: true,
    default: () => {},
  }
});

const bg = ref('url("' + props.projItem.preview + '")');

</script>


<template>
    <div class="cursor-pointer velo_shadow this_item relative" @click=" $emit('projectChooseClick', projItem) " >
        <div class="w-full img_div"></div>
        <div class="w-full text-gray-900 txt_div">
            <span>{{ projItem.name }}</span>
        </div>
        <div class="route_kind">
            {{ projItem.kind }}
        </div>
    </div>
</template>

<style scoped>
.img_div{
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter:grayscale(.5);
    background-image: v-bind(bg);
}
.txt_div{
    background-color: white;
    height:25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
}
.route_kind{
    position: absolute;
    top:5px;
    right:5px;
    text-align: right;
    line-height: 1;
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
.this_item:hover  .route_kind{
    font-size: 18px;
    opacity: 1;
    font-weight: 700;
}


@media(max-width:800px){
    .this_item .route_kind{
        opacity: 1;
        font-weight: 800;
        font-size: 18px;
    }
    .this_item .img_div{
        filter:grayscale(0);
    }
}
</style>