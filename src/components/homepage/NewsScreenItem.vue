<!-- <script>
import SimpleArrow from '../parts/SimpleArrow.vue';

export default {
  components: {
    SimpleArrow
  },
  props: [],
  data() {
    return {
        isHover: false
    }
  }
}
</script> -->

<script setup>
import SimpleArrow from '../parts/SimpleArrow.vue';
// import useNewsStore from '../../stores/NewsStore';

// const newsStore = useNewsStore();
const isHover = false;
const props = defineProps({
  news: {
    type: Object,
    required: true,
    default: () => {},
  }
});
</script>

<template>
    <div class="news_item velo_shadow" @mouseenter="isHover = true" @mouseleave="isHover = false">
       <div class="news_item_img" style="background-image: url('src/assets/img/photo_bikers.jpg');"> </div>
        <div class="news_item_texts">
            <div class="news_item_type bg-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 
                7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /> </svg>
            </div>
            <div class="news_item_date text-gray-400">12 травня</div>
            <div class="news_item_title">Фрукти - важлива частина здорового харчування</div>
            <div class="news_item_text">hasdgs dfhgsdfklh gsdfhgdsflj kghsdflgh sdflkghsdfklj ghsdfjklghsdfkl gjghsdfjklg hsdfkljgh kldfghdsf kljghsdfjklg</div>
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
        font-weight: 700;
    }
    .news_item:hover .news_item_text {
        opacity: 1;
    }
</style>