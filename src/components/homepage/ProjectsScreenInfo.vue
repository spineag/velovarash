<script setup>
import SimpleArrow from '../parts/SimpleArrow.vue';
import { ref, computed } from "vue";

const props = defineProps({
  projItem: {
    type: Object,
    required: true,
    default: () => {},
  }
});

function decodeHard(v){
    switch (v){
        case 1: return 'Початкова';
        case 2: return 'Легка';
        case 3: return 'Середня';
        case 4: return 'Висока';
        case 5: return 'Дуже висока';
    }
    return v+'__';
}
function decodeTime(t){
    return new Date(t * 1000).toISOString().slice(11, 19);
}

</script>

<template>
    <div  @mouseenter="isHover=true" @mouseleave="isHover=false" class="flex this-item">
        <div class="project_info_label bg-emerald-600">
            <span>{{ projItem.kind }}</span>
        </div>
        <div class="project_info_cont velo_shadow">
            <div class="text-gray-900 project_info_name">{{ projItem.name }}</div>
            <table class="project_info_stats"><tbody>
                <tr>
                    <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M766-120q-41 0-71.5-24.5T656-204H443q-66 
                            0-109.5-43.5T290-357q0-66 43.5-109.5T443-510h77q41 0 67-26t26-67q0-41-26-67t-67-26H304q-9 35-39 59.5T194-612q-48 0-81-33t-33-81q0-48 
                            33-81t81-33q41 0 71 24.5t39 59.5h216q66 0 109.5 43.5T673-603q0 66-43.5 109.5T520-450h-77q-41 0-67 26t-26 67q0 41 26 67t67 26h213q9-35 
                            39-59.5t71-24.5q48 0 81 33t33 81q0 48-33 81t-81 33ZM194-672q23 0 38.5-15.5T248-726q0-23-15.5-38.5T194-780q-23 0-38.5 15.5T140-726q0 23 
                            15.5 38.5T194-672Z"/></svg> 
                        <span>{{ projItem.length }} км</span> </td>
                    <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m123-240-43-43 292-291 167 167 
                            241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg> 
                        <span>{{ projItem.elev }} м</span> </td>
                </tr>
                <tr>
                    <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="m550-84-42-42 142-142-382-382-142 142-42-42 
                            56-58-56-56 85-85-42-42 42-42 43 41 84-84 56 56 58-56 42 42-142 142 382 382 142-142 42 42-56 58 56 56-86 86 42 42-42 42-42-42-84 84-56-56-58 56Z"/></svg> 
                        <span>{{ decodeHard(projItem.hard) }}</span> 
                    </td>
                    <td> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M360-860v-60h240v60H360Zm90 447h60v-230h-60v230Zm30 332q-74 
                            0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 
                            74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81Zm0-60q125 0 212.5-87.5T780-441q0-125-87.5-212.5T480-741q-125 0-212.5 87.5T180-441q0 125 87.5 212.5T480-141Zm0-299Z"/></svg> 
                        <span>{{ decodeTime(projItem.time) }}</span> 
                    </td>
                </tr>
                <tr>
                    <td colspan="2"> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" class="inline-block"><path d="M619.08-754q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58 
                            21.421-21.5 51.5-21.5 30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5ZM422-548l89 95v247h-60v-200L315-525q-9-8-15-21.5t-6-27.5q0-14 
                            6.5-27t14.5-21l119-119q8-8 22.5-14.5T487-762q16 0 30.5 6.5T540-741l78 78q27 27 64.538 46.5Q720.077-597 767-597v60q-59.564 0-107.782-22.5Q611-582 573-620l-40-40-111 
                            112Zm-221.912 78Q283-470 339-413.912q56 56.087 56 139Q395-192 338.912-136q-56.087 56-139 56Q117-80 61-136.088q-56-56.087-56-139Q5-358 61.088-414q56.087-56 139-56ZM200-129q62 
                            0 104-42t42-104q0-62-42-104t-104-42q-62 0-104 42T54-275q0 62 42 104t104 42Zm560.088-341Q843-470 899-413.912q56 56.087 56 139Q955-192 898.912-136q-56.087 56-139 56Q677-80 
                            621-136.088q-56-56.087-56-139Q565-358 621.088-414q56.087-56 139-56ZM760-129q62 0 104-42t42-104q0-62-42-104t-104-42q-62 0-104 42t-42 104q0 62 42 104t104 42Z"/></svg> 
                        <span>{{ projItem.type }}</span> 
                    </td>
                </tr>
            </tbody></table>
            <SimpleArrow :class="{ contonhover: isHover }" class="simple_arrow" />
        </div>
    </div>
</template>

<style scoped>
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
    margin-left: 2px;
}
/* .project_info_name:before {
    position: absolute; 
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #059669;
    bottom: 2px;
    right: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: .2s ease;
    opacity: .5;
}
.this-item:hover .project_info_name:before {
    transform-origin: right;
    transform: scaleX(1);
}  */
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
    transition: .2s ease;
}
.this-item:hover svg {
    fill: #059669;
}
.simple_arrow{
    position: absolute;
    bottom:10px;
    right:20px;
}
</style>