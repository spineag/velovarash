<template>
    <div class="link-icon">
        <svg class="icon icon1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
        <svg class="icon icon2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
    </div>
</template>

<style scoped>
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
    cursor: pointer;
}
.icon {
    display: block;
    position: absolute;
    transition: transform 0.4s ease;
    width:16px;
    height:16px;
    fill:inherit;
    }
.icon2 { transform: translate(-32px); }
.contonhover .icon1 { transform: translate(32px); }
.contonhover .icon2 { transform: translate(0px); }
.link-icon:hover .icon1 { transform: translate(32px); }
.link-icon:hover .icon2 { transform: translate(0px); }
.rotate180{
    margin-left: 0;
    margin-right: 8px;
    transform: rotate(180deg);
}
</style>