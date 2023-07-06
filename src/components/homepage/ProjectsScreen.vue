<script setup>
import ProjectItem from '../homepage/ProjectsScreenItem.vue';
import ProjectInfo from '../homepage/ProjectsScreenInfo.vue';
import TextArrow from '../parts/TextArrow.vue';
</script>

<template>
    <div class="w-full">
        <div class="project_preview" style="background-image: url('src/assets/img/photo_bikers.jpg');">
            <div class="velo_container h-full">
                <div class="project_info">
                    <ProjectInfo />
                </div>
            </div>
        </div>
        <div class="velo_container velo_cont_inner pointer-events-none">
            <div class="velo_section_title">
                <div class="text-gray-900 text-center">Проекти</div>
            </div>
            <div class="projects_items_container pointer-events-auto">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <div class="all_projects_item">
                    <TextArrow class="vertical_pos" title_text="Всі проекти"></TextArrow>
                </div>
            </div>
        </div>



    </div>
</template>



<style scoped>
.project_preview{
    width: 100%;
    height: 650px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 248px;
}
.project_info{
    position: absolute;
    right: 0;
    bottom: 80px;
    display: flex;
    cursor: pointer;
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
.velo_cont_inner{
    height: calc(650px + 248px);
}
</style>