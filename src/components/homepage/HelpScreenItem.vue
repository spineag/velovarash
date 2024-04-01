<script setup>
import { ref, computed } from "vue";

// const isHover = false;
const props = defineProps({
  helpItem: {
    type: Object,
    required: true,
    default: () => {},
  },
  itemWidth: Number,
});

const bg = ref('url("' + props.helpItem.bg + '")');
const ava = ref('url("' + props.helpItem.ava + '")');
const wdth = computed(() => props.itemWidth + 'px');

</script>

<template>
    <div class="help_item velo_shadow"> <!--/ @mouseenter="isHover = true" @mouseleave="isHover = false"> -->
        <div class="help_cont">
            <ul>
                <li v-for="n of helpItem.list" :key="n">{{ n }}</li>
            </ul>
            <div class="help_avatar">
                <img alt=""/>
            </div>
        </div>
        <div class="help_overlay">
            <div class="help_overlay_img"> </div>
            <div class="help_overlay_line">
                <span>{{ helpItem.phone }}</span>
                <span> {{ helpItem.name }}</span>
            </div>
        </div>
       
        
    </div>
</template>

<style scoped>
.help_item{
    min-width:v-bind(wdth);
    width:v-bind(wdth);
    height:220px;
    cursor: pointer;
    background-color: white;
    display: block;
}
.help_cont{
    width: 100%;
    height: 100%;
    padding: 20px;
}
.help_title{
    font-weight: bold;
    font-size: 18px;
}
.help_cont ul{
    list-style-type: square;
    list-style-position: outside;
}
.help_cont li{
    margin-left: 15px;
}
.help_avatar{
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.help_avatar img{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    background-image: v-bind(ava);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.help_overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .1s ease;
}
.help_overlay_img{
    width: 100%;
    height: 190px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: v-bind(bg);
}
.help_overlay_line{
    height:30px;
    width:100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
}
.help_item:hover .help_overlay {
  opacity: 1;
}
</style>