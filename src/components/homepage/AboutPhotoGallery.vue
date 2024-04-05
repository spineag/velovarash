<!-- https://codepen.io/noeldelgado/pen/nweYMz -->
<!-- https://codepen.io/spineag/pen/RwEaMYa -->

<script setup>
import { ref, computed, onMounted } from "vue";

let url = 'https://velovarash.pp.ua/src/assets/img/small_photos/';
let arrayAllUrls = [];
for (let i=1; i<=126;i++){
	arrayAllUrls.push(url + i + '.jpg');
}
let arrayUrls = ref([]);
const shuffle = (arr) => { 
    return arr.sort(() => Math.random() - 0.5); 
};
let ar = shuffle(arrayAllUrls).splice(0,50);
for (let k=0;k<50;k++){
	arrayUrls.value.push({url1:ar[2*k], url2:ar[2*k+1]});
}

function initPics(){
    const nodes = [].slice.call(document.querySelectorAll('.layer_item_cont'), 0);
    const directions  = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
    const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
		const { width, height, top, left } = node.getBoundingClientRect();
		const l = ev.pageX - (left + window.scrollX);
		const t = ev.pageY - (top + window.scrollY);
		const x = (l - (width/2) * (width > height ? (height/width) : 1));
		const y = (t - (height/2) * (height > width ? (width/height) : 1));
		return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
	}

	class Item {
		constructor(element) {
			this.element = element;   
			this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
			this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
		}
		
		update(ev, prefix) {
			this.element.classList.remove(...classNames);
			this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
		}
	}

	nodes.forEach(node => new Item(node));
}

// const handleResize = () => {};
onMounted(()=>{
	// window.addEventListener('resize', handleResize);
		initPics();
});
// onUnmounted(() => {
//     window.removeEventListener('resize', handleResize);
// })

</script>

<template>
    <div class="cont">
		<div class="layer_item_cont" v-for="obj in arrayUrls" :key = "obj.url1">
			<div class="layer1" :style="{'background-image': 'url( '+obj.url1+' )'}">  </div>
			<div class="layer2" :style="{'background-image': 'url( '+obj.url2+' )'}">  </div>
		</div>
    </div>
</template>

<style scoped>
.cont{
    width:50%;
    height:100%;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
	gap: 0;
	justify-content: right;
	z-index: 2;
}
.layer_item_cont {
	width: 250px;
	height: 150px;
	cursor: cell;
}
.layer1 {
	width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.layer2 {
	transform: rotate3d(1, 0, 0, 90deg);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
	background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
 .in-top .layer2 {
	 transform-origin: 0% 0%;
	 animation: in-top 300ms ease 0ms 1 forwards;
}
 .in-right .layer2 {
	 transform-origin: 100% 0%;
	 animation: in-right 300ms ease 0ms 1 forwards;
}
 .in-bottom .layer2 {
	 transform-origin: 0% 100%;
	 animation: in-bottom 300ms ease 0ms 1 forwards;
}
 .in-left .layer2 {
	 transform-origin: 0% 0%;
	 animation: in-left 300ms ease 0ms 1 forwards;
}
 .out-top .layer2 {
	 transform-origin: 0% 0%;
	 height: 0;
	 animation: out-top 300ms ease 0ms 1 forwards;
}
 .out-right .layer2 {
	 transform-origin: 100% 0%;
	 height: 0;
	 animation: out-right 300ms ease 0ms 1 forwards;
}
 .out-bottom .layer2 {
	 transform-origin: 0% 100%;
	 height: 0;
	 animation: out-bottom 300ms ease 0ms 1 forwards;
}
 .out-left .layer2 {
	 transform-origin: 0% 0%;
	 height: 0;
	 animation: out-left 300ms ease 0ms 1 forwards;
}
 @keyframes in-top {
	 from {
		 transform: rotate3d(-1, 0, 0, 90deg);
	}
	 to {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
}
 @keyframes in-right {
	 from {
		 transform: rotate3d(0, -1, 0, 90deg);
	}
	 to {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
}
 @keyframes in-bottom {
	 from {
		 transform: rotate3d(1, 0, 0, 90deg);
	}
	 to {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
}
 @keyframes in-left {
	 from {
		 transform: rotate3d(0, 1, 0, 90deg);
	}
	 to {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
}
 @keyframes out-top {
	 from {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
	 to {
		 transform: rotate3d(-1, 0, 0, 104deg);
	}
}
 @keyframes out-right {
	 from {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
	 to {
		 transform: rotate3d(0, -1, 0, 104deg);
	}
}
 @keyframes out-bottom {
	 from {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
	 to {
		 transform: rotate3d(1, 0, 0, 104deg);
	}
}
 @keyframes out-left {
	 from {
		 transform: rotate3d(0, 0, 0, 0deg);
	}
	 to {
		 transform: rotate3d(0, 1, 0, 104deg);
	}
}

@media (max-width: 1480px){
	.cont{ 
		grid-template-columns: repeat(5, 1fr);
    	grid-template-rows: repeat(5, 1fr);
	}
	.layer_item_cont { /* full height: 600px. 250x150 */
		width: 200px;
		height: 120px;
		cursor: cell;
	}
}

@media (max-width: 1240px){
	.cont{ 
		grid-template-columns: repeat(4, 1fr);
    	grid-template-rows: repeat(6, 1fr);
	}
	.layer_item_cont { 
		width: 164px;
		height: 100px;
		cursor: cell;
	}
}

@media (max-width:1024px){
	.cont{
		display: none;
	}
}




</style>