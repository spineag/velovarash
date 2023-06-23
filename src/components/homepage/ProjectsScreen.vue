<script setup>
import ProjectItem from '../homepage/ProjectsScreenItem.vue'
</script>

<template>
    <div class="w-full">
        <div class="project_preview" style="background-image: url('src/assets/img/photo_bikers.jpg');">
            <div class="velo_container h-full">
                <div class="project_info cursor-pointer">
                    <div class="project_info_label bg-emerald-600">
                        <span>XC</span>
                    </div>
                    <div class="project_info_cont">
                        <div class="text-gray-900 project_info_name">Меслибниця MOVE</div>
                        <table class="project_info_stats"><tbody>
                            <tr>
                                <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                                        0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                                        33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                                        39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                                        15.5 38.5T194-672Z"/></svg> 
                                    <span>35.4 км</span> </td>
                                <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                                        241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                                    <span>130 м</span> </td>
                            </tr>
                            <tr>
                                <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m550-84-42-42 142-142-382-382-142 142-42-42 
                                        56-58-56-56 85-85-42-42 42-42 43 41 84-84 56 56 58-56 42 42-142 142 382 382 142-142 42 42-56 58 56 56-86 86 42 42-42 42-42-42-84 84-56-56-58 56Z"/></svg> 
                                    <span>Середня</span> 
                                </td>
                                <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M360-860v-60h240v60H360Zm90 447h60v-230h-60v230Zm30 332q-74 
                                        0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 
                                        74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81Zm0-60q125 0 212.5-87.5T780-441q0-125-87.5-212.5T480-741q-125 0-212.5 87.5T180-441q0 125 87.5 212.5T480-141Zm0-299Z"/></svg> 
                                    <span>1:22</span> 
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2"> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M619.08-754q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 
                                        21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5ZM422-548l89 95v247h-60v-200L315-525q-9-8-15-21.5t-6-27.5q0-14 
                                        6.5-27t14.5-21l119-119q8-8 22.5-14.5T487-762q16 0 30.5 6.5T540-741l78 78q27 27 64.538 46.5Q720.077-597 767-597v60q-59.564 0-107.782-22.5Q611-582 573-620l-40-40-111 
                                        112Zm-221.912 78Q283-470 339-413.912q56 56.087 56 139Q395-192 338.912-136q-56.087 56-139 56Q117-80 61-136.088q-56-56.087-56-139Q5-358 61.088-414q56.087-56 139-56ZM200-129q62 
                                        0 104-42t42-104q0-62-42-104t-104-42q-62 0-104 42T54-275q0 62 42 104t104 42Zm560.088-341Q843-470 899-413.912q56 56.087 56 139Q955-192 898.912-136q-56.087 56-139 56Q677-80 
                                        621-136.088q-56-56.087-56-139Q565-358 621.088-414q56.087-56 139-56ZM760-129q62 0 104-42t42-104q0-62-42-104t-104-42q-62 0-104 42t-42 104q0 62 42 104t104 42Z"/></svg> 
                                    <span>Змагання, тренування</span> 
                                </td>
                            </tr>
                        </tbody></table>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="inherit" class="w-6 h-6 velo_stroke_gray project_info_arrow">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> </svg>
                    </div>
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
}
.project_info_label{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    z-index: 1;
}
.project_info_cont{
    width:300px;
    background-color: white;
    padding: 10px;
}
.project_info_cont:before{
    content:'';
    width: 30px;
    height: 100%;
    position: absolute;
    bottom:0;
    left:-30px;
    background-color: white;
}
.project_info_name{
    font-size: 24px;
    font-weight: bold;
}
.project_info_stats{
    width: 100%;
}   
.project_info_stats td{
    line-height: 1;
    height: 30px;
}
.project_info_stats svg{
    width:20px;
    height: 20px;
    margin-right: 10px;
    fill: #9ca3af;
}
.project_info_arrow{
    position: absolute;
    bottom:10px;
    right:20px;
}
.velo_cont_inner{
    height: calc(650px + 248px);
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