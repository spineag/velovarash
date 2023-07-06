<script>
import SimpleArrow from '../parts/SimpleArrow.vue';

export default {
  components: {
    SimpleArrow
  },
  props: ['title_text'],
  data() {
    return {
        isHover: false
    }
  }
}
</script>

<template>
    <a href="#" class="link" @mouseenter="isHover = true"    @mouseleave="isHover = false">
        <span class="mask">
            <div class="link-container">
                <span class="link-title1 arrow_title">{{ title_text }}</span>
                <span class="link-title2 arrow_title">{{ title_text }}</span>
            </div>
        </span>
        <SimpleArrow :class="{ contonhover: isHover }" />
    </a>
</template>

<style scoped>
    .link {
        height: 24px;
        align-items: center;
        text-decoration: none;
        display: flex;
        cursor: pointer;
    }
    .mask {
        position: relative;
        padding: 0;
        height: 16px;
        overflow: hidden;
    }
    .link-container { transition: transform 0.4s ease; }

    .arrow_title {
        display: block;
        font-size: 16px;
        line-height: 16px;
        transition: transform 0.4s ease;
        white-space: nowrap;
    }
    .vertical_pos{
        height: 40px;
        flex-direction: column;
    }
    .link-title1 { transform-origin: right center; }
    .link-title2 {
        transform-origin: left center;
        transform: rotate(20deg);
    }
    .link:hover .link-container { transform: translateY(-16px); }
    .link:hover .link-title1 { transform: rotate(20deg); }
    .link:hover .link-title2 { transform: rotate(0); }
    .white_color{
        color: white;
        fill: white;
    }
</style>