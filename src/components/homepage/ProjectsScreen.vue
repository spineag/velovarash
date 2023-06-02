<script setup>
import ProjectItem from '../homepage/ProjectsScreenItem.vue'
</script>

<template>
    <div class="w-full">
        <div class="project_preview" style="background-image: url('src/assets/img/photo_bikers.jpg');">
            <div class="velo_container h-full">
                <div class="project_info">
                    <div class="project_info_icon bg-emerald-600">
                        <span>XC</span>
                    </div>
                    <div class="project_info_cont">
                        <div class="text-gray-900">Меслибниця MOVE</div>
                        <div class="project_info_stats">
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="velo_container velo_cont_inner">
            <div class="velo_section_title">
                <div class="text-gray-900 text-center">Проекти</div>
            </div>
            <div class="projects_items_container">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <div class="all_projects_item">
                    <span>Всі проекти</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6 velo_stroke_gray">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> </svg>
                </div>
            </div>
        </div>



    </div>
</template>



<style scoped>
.project_preview{
    width: 100%;
    height: 700px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 288px;
}
.project_info{
    position: absolute;
    right: 0;
    bottom: 100px;
    display: flex;
}
.project_info_icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-size: 24px;
    font-weight: bold;
    color: white;
}
.project_info_cont{
    width:340px;
    background-color: white;
    padding: 10px;
}
.project_info_stats{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
}
.velo_cont_inner{
    height: calc(700px + 288px);
}
.projects_items_container{
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 20px;
}
.all_projects_item{
    width: 100px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
}
</style>