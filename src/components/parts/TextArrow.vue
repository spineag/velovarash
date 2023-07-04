<script>

</script>

<template>
    <!-- <div class="news_nav_showall cursor-pointer">
        <span>some text</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6 velo_stroke_gray inline-block ml-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> </svg>
    </div> -->

    <a href="#" class="link">
        <span class="mask">
            <div class="link-container">
            <span class="link-title1 title">some text</span>
            <span class="link-title2 title">some text</span>
            </div>
        </span>
        <div class="link-icon">
            <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
        </div>
        </a>
</template>

<style scoped>
    .link {
        height: 24px;
        align-items: center;
        text-decoration: none;
        display: flex;
    }
    .mask {
        position: relative;
        padding: 0;
        height: 16px;
        overflow: hidden;
    }
    .link-container { transition: transform 0.4s ease; }

    .title {
        display: block;
        font-size: 16px;
        line-height: 16px;
        transition: transform 0.4s ease;
    }
    .link-title1 { transform-origin: right center; }
    .link-title2 {
        transform-origin: left center;
        transform: rotate(20deg);
    }
    .link-icon {
        position: relative;
        width: 28px;
        height: 28px;
        background: transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
        overflow: hidden;
    }
    .icon {
        display: block;
        position: absolute;
        transition: transform 0.4s ease;
        width:16px;
        height:16px;
    }
    .icon:nth-child(2) { transform: translate(-32px); }
    .link:hover .link-container { transform: translateY(-16px); }
    .link:hover .link-title1 { transform: rotate(20deg); }
    .link:hover .link-title2 { transform: rotate(0); }
    .link:hover .icon:first-child { transform: translate(32px); }
    .link:hover .icon:nth-child(2) { transform: translate(0px); }
</style>