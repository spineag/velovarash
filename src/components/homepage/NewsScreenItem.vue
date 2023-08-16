<script setup>
import SimpleArrow from '../parts/SimpleArrow.vue';
import { ref, computed } from "vue";
// import { useNewsStore } from '../../stores/NewsStore';

// const newsStore = useNewsStore();
const isHover = false;
const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
    default: () => {},
  }
});

const bg = ref('url("' + props.newsItem.preview + '")');

function adaptiveText(txt){
    if (txt.length < 120) return txt;
    return txt.slice(0,117) + '...';
}

</script>

<template>
    <div class="news_item velo_shadow" @mouseenter="isHover = true" @mouseleave="isHover = false">
       <div class="news_item_img"> </div>
        <div class="news_item_texts">
            <div class="news_item_type bg-emerald-600">
                <svg v-if="newsItem.type=='news'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 
                    7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /> </svg>
                <svg v-if="newsItem.type=='action'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6">
                    <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
                <svg v-if="newsItem.type=='video'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                <svg v-if="newsItem.type=='blog'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 
                    6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
            </div>
            <div class="news_item_date text-gray-400">{{ newsItem.date }}</div>
            <div class="news_item_title">{{ newsItem.title }}</div>
            <div class="news_item_text">{{ adaptiveText(newsItem.text) }}</div>
        </div>
        <div class="news_item_link">
            <SimpleArrow :class="{ contonhover: isHover }" />
        </div>
    </div>
</template>

<style scoped>
    .news_item{
        /* max-width: 285px; */
        width:100%;
        height:280px;
        cursor: pointer;
        overflow: hidden;
    }
    .news_item_img{
        width:100%;
        height:180px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: v-bind(bg);
    }
    .news_item_texts{
        position: relative;
        min-height: 60px;
        height: 200px;
        background-color: white;
        padding: 10px 20px;
        transition: all 0.4s ease;
    }
    .news_item_type{
        width: 40px;
        height: 40px;
        position: absolute;
        top: -20px;
        left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .news_item_type svg{
        stroke: white;
    }
    .news_item_date{
        text-align: right;
        font-size: 12px;
    }
    .news_item_title{
        font-weight: 400;
    }
    .news_item_text{
        opacity: 0;
	    transition: all 0.3s 0.2s ease;
        margin-top:10px;
    }
    .news_item_link{
        position:absolute;
        bottom:10px;
        right:20px;
    }
    .news_item:hover .news_item_texts {
        transform: translateY(-100px);
    }
    .news_item:hover .news_item_title{
        font-weight: 800;
    }
    .news_item:hover .news_item_text {
        opacity: 1;
    }
</style>