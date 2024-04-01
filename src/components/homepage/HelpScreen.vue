<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useHelpsStore } from '../../stores/HelpsStore';
import HelpItem from '../homepage/HelpScreenItem.vue';
import TextArrow from '../parts/TextArrow.vue';
import SimpleArrow from '../parts/SimpleArrow.vue';


const observer = new IntersectionObserver((entries, observer) => { });

const helpsStore = useHelpsStore();
const offset = ref(0), itemWidth = ref(305), size = ref(4);
const atEndOfList = computed(() => offset.value <= itemWidth.value*(size.value - helpsStore.helps.length));
const atHeadOfList = computed(() => offset.value >= 0);

const handleResize = () => {
    offset.value = 0;
    let w = window.innerWidth;
    if (w >= 1280){
        itemWidth.value = 305;
        size.value = 4;
    } else if (w >= 1024){
        size.value = 4;
        itemWidth.value = (w - 40 - (size.value-1)*20)/size.value;
    } else if (w >= 768){
        size.value = 3;
        itemWidth.value = (w - 40 - (size.value-1)*20)/size.value;
    } else if (w >= 640) {
        size.value = 2;
        itemWidth.value = (w - 40 - (size.value-1)*20)/size.value;
    } else if (w >= 400){
        size.value = 1;
        itemWidth.value = (w - 40 - (size.value-1)*20)/size.value;
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
})

function moveCarousel(direction) {
    if (direction === 1 && !atEndOfList._value) offset.value -= itemWidth.value + 20;
    else if (direction === -1 && !atHeadOfList._value) offset.value += itemWidth.value + 20;
}

let contSlider, isDown = false, startX, startPos, newOffset, xLast, delta;
function initSlider(){
    contSlider.addEventListener('mousedown', startSlide);
	contSlider.addEventListener('touchstart', startSlide);
}
const endSlide = () => {
    isDown = false;
    contSlider.classList.remove('active');
    if (delta < 0) {
        newOffset = parseInt(newOffset/(itemWidth.value + 20) - 1) * (itemWidth.value + 20);
        if (newOffset < itemWidth.value*(size.value - helpsStore.helps.length))
            newOffset = itemWidth.value*(size.value - helpsStore.helps.length) - 40;
    } else {
        newOffset = parseInt(newOffset/(itemWidth.value + 20)) * (itemWidth.value + 20);
        if (newOffset > 0)
            newOffset = 0;
    }
    offset.value = newOffset;
    contSlider.removeEventListener('mousemove', moveSlide);
	contSlider.removeEventListener('touchmove', moveSlide);
	contSlider.removeEventListener('mouseleave', endSlide);
	contSlider.removeEventListener('mouseup', endSlide);
	contSlider.removeEventListener('touchend', endSlide);
}
const startSlide = (e) => {
    isDown = true;
    contSlider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX;
    xLast = startX;
    startPos = offset.value;
    contSlider.addEventListener('mousemove', moveSlide);
	contSlider.addEventListener('touchmove', moveSlide);
	contSlider.addEventListener('mouseleave', endSlide);
	contSlider.addEventListener('mouseup', endSlide);
	contSlider.addEventListener('touchend', endSlide);
}
const moveSlide = (e) => {
	if(!isDown) return;
    e.preventDefault();
    let x = e.pageX || e.touches[0].pageX;
    newOffset = x - startX + startPos;
    if (newOffset < itemWidth.value*(size.value - helpsStore.helps.length)) {
        newOffset = itemWidth.value*(size.value - helpsStore.helps.length) - 40;
        x = xLast;
    } else if (newOffset > 0) {
        newOffset = 0;
        x = xLast;
    }
    offset.value = newOffset;
    if (x == xLast) {
        if (delta < 0) delta = -1;
        else delta = 1;
    } else delta = x - xLast;
    xLast = x;
} 

onMounted(() => {
    contSlider = document.querySelector('.help_items_carousel');
    observer.observe(contSlider);
    initSlider();
})


</script>

<template>
    <div class="w-full bg_lines">
        <div class="velo_container h-full">
            <div class="velo_section_title text-center">
                <div class="text-gray-900 ">Майстри</div>
            </div>
            
            <div class="help_items_container">
                <div class="help_items_carousel flex" :style="{ transform: 'translateX('+ offset +'px)'}">
                    <HelpItem v-for="hlp of helpsStore.helps" :key="hlp.id" :helpItem="hlp" :itemWidth="itemWidth" class="help_item"/>
                </div>
            </div>

            <div class="help_nav_container">
                <div class="flex">
                    <SimpleArrow @click="moveCarousel(-1)" class="rotate180" :class="{ disabled: atHeadOfList }"/>
                    <SimpleArrow @click="moveCarousel(1)" :class="{ disabled: atEndOfList }"/>
                </div>
                <TextArrow title_text="Всі майстри"></TextArrow>
            </div>

        </div>
    </div>
</template>

<style scoped>
.bg_lines{
    height: 520px;
}
.bg_lines:before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 520px;
    opacity: 0.1;
    background-image: url('../../assets/svg/lines-dark.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    }
.help_icons{
    position: absolute;
    bottom: 20px;
    right: 0;
}
.help_icons button{
    margin-left: 10px;
}
.help_items_container{
    width: 100%;
    overflow:hidden;
    padding-bottom:8px;
}
.help_items_carousel {
    display: flex;
    transform: translatex(0px);
    transition: transform 150ms ease-out;
}
.help_items_carousel.active{ 
    cursor:grab;
    transition: transform 0ms ease-out; 
    user-select: none;
}
.help_item{ margin-right: 20px; }
.help_item:last-child{ margin-right: 0; }
.help_nav_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
}
</style>