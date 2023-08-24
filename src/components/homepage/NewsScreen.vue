<script setup>
import { ref, computed, onMounted } from "vue";
import { useNewsStore } from '../../stores/NewsStore';
import NewsItem from '../homepage/NewsScreenItem.vue';
import TextArrow from '../parts/TextArrow.vue';
import SimpleArrow from '../parts/SimpleArrow.vue';

const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
});

const newsStore = useNewsStore();

function chooseNewsType(nType){
    newsStore.setNewsType(nType);
    let ar = document.querySelectorAll('.news_btn_icon');
    ar = [...ar];
    if (ar.length) ar.forEach(el => el.classList.remove('active_btn_icon'));
    ar = document.querySelectorAll('.news_btn_icon.'+nType+'_btn');
    ar = [...ar];
    if (ar.length) ar[0].classList.add('active_btn_icon');
    offset.value = 0;
}

let offset = ref(0), itemWidth = ref(305), size = 4; 
const atEndOfList = computed(() => offset.value <= itemWidth.value*(size - newsStore.newsByType.length));
const atHeadOfList = computed(() => offset.value >= 0);
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
        if (newOffset < itemWidth.value*(size - newsStore.newsByType.length))
            newOffset = itemWidth.value*(size - newsStore.newsByType.length) - 40;
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
    if (newOffset < itemWidth.value*(size - newsStore.newsByType.length)) {
        newOffset = itemWidth.value*(size - newsStore.newsByType.length) - 40;
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
    contSlider = document.querySelector('.news_items_carousel');
    observer.observe(contSlider);
    initSlider();
})

</script>



<template>
    <div class="w-full bg_lines">
        <div class="velo_container h-full">
            <div class="velo_section_title">
                <div class="text-gray-900 ">Новини</div>
                <div class="flex items-center justify-end news_icons">
                    <button title="Новини" class="news_btn_icon news_btn" @click="chooseNewsType('news')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="stroke-gray-400 hover:stroke-gray-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 
                        0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
                    </button>
                    <button title="Події" class="news_btn_icon action_btn" @click="chooseNewsType('action')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class=" stroke-gray-400 hover:stroke-gray-700">
                        <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
                    </button>
                    <button title="Відео" class="news_btn_icon video_btn" @click="chooseNewsType('video')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class=" stroke-gray-400 hover:stroke-gray-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                    </button>
                    <button title="Статті" class="news_btn_icon blog_btn" @click="chooseNewsType('blog')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class=" stroke-gray-400 hover:stroke-gray-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 
                        6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                    </button>
                </div>
            </div>
            
            <div class="news_items_container">
                    <div class="news_items_carousel flex" :style="{ transform: 'translateX('+ offset +'px)'}">
                        <NewsItem v-for="nws of newsStore.newsByType" :key="nws.id" :newsItem="nws" :itemWidth="itemWidth" class="news_item"/>
                    </div>
            </div>

            <div class="news_nav_container">
                <div class="flex">
                    <SimpleArrow @click="moveCarousel(-1)" class="rotate180" :class="{ disabled: atHeadOfList }"/>
                    <SimpleArrow @click="moveCarousel(1)" :class="{ disabled: atEndOfList }"/>
                </div>
                <TextArrow title_text="Всі новини"></TextArrow>
            </div>

        </div>
    </div>
</template>



<style scoped>
.bg_lines:before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 150%;
    opacity: 0.1;
    background-image: url('../../assets/svg/lines-dark.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    }
.news_icons{
    position: absolute;
    bottom: 20px;
    right: 0;
}
.news_btn_icon{
    margin-left: 10px;
}
.news_btn_icon svg {
    width: 22px;
    height: 22px;
}
.active_btn_icon svg{
    stroke:green;
}
.news_items_container{
    width: 100%;
    overflow:hidden;
    padding-bottom:8px;
}
.news_items_carousel {
  display: flex;
  transform: translatex(0px);
  transition: transform 150ms ease-out;
}
.news_items_carousel.active{ 
    cursor:grab;
    transition: transform 0ms ease-out; 
    user-select: none;
}
.news_nav_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0 20px 0;
}
.news_item{ margin-right: 20px; }
.news_item:last-child{ margin-right: 0; }
</style>