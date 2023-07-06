<script setup>
import HelpItem from '../homepage/HelpScreenItem.vue';
import TextArrow from '../parts/TextArrow.vue';
import SimpleArrow from '../parts/SimpleArrow.vue';
</script>

<template>
    <div class="w-full bg_lines">
        <div class="velo_container h-full">
            <div class="velo_section_title text-center">
                <div class="text-gray-900 ">Допомога</div>
            </div>
            
            <div class="help_items_container">
                <HelpItem />
                <HelpItem />
                <HelpItem />
                <HelpItem />
            </div>

            <div class="help_nav_container">
                <div class="flex">
                    <SimpleArrow class="rotate180"/>
                    <SimpleArrow />
                </div>
                <div class="">
                    <TextArrow title_text="Всі види"></TextArrow>
                </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
}
.help_nav_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
}
</style>