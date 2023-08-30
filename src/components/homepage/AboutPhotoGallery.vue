<!-- https://codepen.io/noeldelgado/pen/nweYMz -->
<!-- https://codepen.io/spineag/pen/RwEaMYa -->

<script setup>

let ar=[
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHYqz-67pjHTny8LUzB15YX0cNbjhChKJLVVrxDK6uBz1E5DPK1cgPnfVVh3L-Q_gHXA&usqp=CAU', 
     url2:'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/02/Pune-%E2%80%93-Panshet-Dam-cycle-tour.jpg?fit=800%2C530&ssl=1'},
    {url1:'https://img1.oastatic.com/img2/37318242/420x237r/.jpg', 
     url2:'https://www.radurlaub.com/fileadmin/_processed_/0/0/csm_Kinder_Donauradweg_WEB__c_NiederoesterreichWerbung_StefanFuertbauer_54df4248fa.jpg'},
    {url1:'https://www.nps.gov/articles/images/Bicyclists-in-Shenandoah-National-Park-for-web.jpg', 
     url2:'https://cdn.biketours.com/assets/files/1439/difficulty-level_bikers.800x0.jpg.webp'},
    {url1:'https://www.visitfiemme.it/var/outdooractive/59648162.jpg', 
     url2:'https://francemotorhomehire.com/wp-content/uploads/2017/12/Cyclists-and-motorhomes-are-both-really-well-catered-for-in-The-Loire-Valley-with-cycle-routes-and-campsites-galore-.jpg'},
    {url1:'https://www.visitberlin.de/system/files/styles/visitberlin_content_image_medium_visitberlin_mobile_1x/private/image/Tegeler_Forst_083_c_visitBerlin_Chris_Martin_web.jpg?itok=Cgs2XvWH', 
     url2:'https://im.indiatimes.in/content/2023/Jul/arshel-akhter_64ba2b87e1a4d.jpg?w=820&h=540&cc=1'},
    {url1:'https://blog.wiggle.co.uk/sites/default/files/styles/770x480crop/public/hero/blog_7.jpg?itok=dlasgLVL', 
     url2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKASKucd971kEZSw9okVuF-fG9DnATi3Jxg&usqp=CAU'},
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaiQC5uv1hVDC1C70JagCSiwM8y88QoisIdazsaOpFjLnZoFgsxtHvSN92ADwgxNH4pY&usqp=CAU', 
     url2:'https://rnz-ressh.cloudinary.com/image/upload/s--wuKyvaT5--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1667879173/4LIMTJ1_Capture_PNG'},
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKi4_PXLJiwh9nwXiE0xH0EFVHgn1HYN-4CfQoYIGfEUvR5LcOCIo6wq2ScNDQC-HllI&usqp=CAU', 
     url2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfApDg2n26nzC70tIvfkVrXFLZemKNn3WFkQ&usqp=CAU'},
    {url1:'https://www.fionaoutdoors.co.uk/wp-content/uploads/2019/08/IMG_20190720_192502.jpg', 
     url2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfX7VoFFGfjPM9VPHIUe4pSWufKjKlt4qnX7kzkAtLiGCS6DpMWDKZskhwfumZc3Kuas&usqp=CAU'},
    {url1:'https://cdn2.stylecraze.com/wp-content/uploads/2014/05/10-effective-morning-exercises-for-weight-loss-22-1.jpg', 
     url2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCmc4IwmDrne8IZ0dAptUmRlZ-99HRlFFIQKWnWODarX4ePRyIyfM3lMXO0Bi77KZh0E&usqp=CAU'},
    {url1:'https://www.yorkshirewoldscycleroute.co.uk/wp-content/uploads/2015/09/Yorkshire-Wolds-Cycle-Route-bridleway-North-Newbald-1600px-1038x576.jpg', 
     url2:'https://www.liveandinvestoverseas.com/wp-content/uploads/2019/07/cycle-tour.jpg'},
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPObBx1naMPIelxrzvSRp2uj-LmBrAJvO1Vw&usqp=CAU', 
     url2:'https://img2.oastatic.com/img2/25393483/420x237r/radfahrer-an-der-innerste.jpg'},
    {url1:'https://www.capetownetc.com/wp-content/uploads/2023/03/CK_211010_CTCYCLETOUR_0882-e1678340348829-1024x576.jpg', 
     url2:'https://www.capetownmagazine.com/media_lib/preview/d20f2d9aef386f35b934f9cd5c755fc0.preview.jpg'},
    {url1:'https://avisassets.abgemea.com/.imaging/flexibleIntroSmall/dam/DMS/local/ZA/latest-news/cape-town-cycle-tour-feature.jpg', 
     url2:'https://cycleactive.com/images/slider/cache/718e4dd12151c370507dd754a664bbc7/Wales%20End%20to%20End%20Road%20Bike.webp'},
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVKQXZQCv04c5XXsSTXnk9ekdo7_TZnEQNw&usqp=CAU', 
     url2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPeqFtc9wAGZc5JcZcdZWU-AIWZUcHSV6Bwu8rzcqwcxv_66utq21Lk9JYadOJ0WR1XA&usqp=CAU'},
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiQyTAvlhHbyUPekXQybULwMvNBi6fMwkSw&usqp=CAU', 
     url2:'https://imengine.public.prod.dur.navigacloud.com/?uuid=2974BC14-45D7-47C1-8436-D9B433381D72&function=fit&type=preview'},
    {url1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOI4FmXIgfPUtBWV8a2vafb9cWsZOQcSGU6w&usqp=CAU', 
     url2:'https://www.visitcompletecare.com/wp-content/uploads/2022/03/shutterstock_209499430-1.webp'},
    {url1:'https://indianewsdiary.com/wp-content/uploads/2022/03/IMG-20220313-WA0007.jpg', 
     url2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdcTMsfSoLA6Gt-FZ43EisgL6LHaNv2o0MqnXoqBiBJ6NJLH0TRdbc57HtcjcMDqB2Dc&usqp=CAU'},
];

function initPics(){
    const nodes = [].slice.call(document.querySelectorAll('li'), 0);
    const directions  = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
    const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
    const { width, height, top, left } = node.getBoundingClientRect();
    const l = ev.pageX - (left + window.pageXOffset);
    const t = ev.pageY - (top + window.pageYOffset);
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

</script>

<template>
    <div class="cont">
        <ul>
            <li>
                <a class="normal" href="#">  </a>
                <div class="info">
                <p>h messenger bshorts.</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.cont{
    width:50%;
    height:100%;
}

/* the important bits */
 li {
	 perspective: 400px;
}
 .info {
	 transform: rotate3d(1, 0, 0, 90deg);
	 width: 100%;
	 height: 100%;
	 padding: 20px;
	 position: absolute;
	 top: 0;
	 left: 0;
	 border-radius: 4px;
	 pointer-events: none;
	 background-color: rgba(26, 188, 156, 0.9);
}
 .in-top .info {
	 transform-origin: 50% 0%;
	 animation: in-top 300ms ease 0ms 1 forwards;
}
 .in-right .info {
	 transform-origin: 100% 0%;
	 animation: in-right 300ms ease 0ms 1 forwards;
}
 .in-bottom .info {
	 transform-origin: 50% 100%;
	 animation: in-bottom 300ms ease 0ms 1 forwards;
}
 .in-left .info {
	 transform-origin: 0% 0%;
	 animation: in-left 300ms ease 0ms 1 forwards;
}
 .out-top .info {
	 transform-origin: 50% 0%;
	 animation: out-top 300ms ease 0ms 1 forwards;
}
 .out-right .info {
	 transform-origin: 100% 50%;
	 animation: out-right 300ms ease 0ms 1 forwards;
}
 .out-bottom .info {
	 transform-origin: 50% 100%;
	 animation: out-bottom 300ms ease 0ms 1 forwards;
}
 .out-left .info {
	 transform-origin: 0% 0%;
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
/* you can ignore this ones */

 li {
	 position: relative;
	 float: left;
	 width: 200px;
	 height: 200px;
	 margin: 5px;
	 padding: 0;
	 list-style: none;
}
 li a {
	 display: inline-block;
	 vertical-align: top;
	 text-decoration: none;
	 border-radius: 4px;
}
 li h3 {
	 margin: 0;
	 font-size: 16px;
	 color: rgba(255, 255, 255, 0.9);
}
 li p {
	 font-size: 12px;
	 line-height: 1.5;
	 color: rgba(255, 255, 255, 0.8);
}
 li .normal {
	 width: 100%;
	 height: 100%;
	 background-color: #ecf0f1;
	 color: rgba(52, 73, 94, 0.6);
	 box-shadow: inset 0 2px 20px #e6ebed;
	 text-align: center;
	 font-size: 50px;
	 line-height: 200px;
}
 li .normal svg {
	 pointer-events: none;
	 width: 50px;
}
 li .normal svg path {
	 fill: rgba(52, 73, 94, 0.2);
}
 * {
	 box-sizing: border-box;
}
 body {
	 background-color: #fff;
}
 h1 {
	 margin: 0 auto 5px;
	 text-align: center;
}
 h3 {
	 font-family: 'Bree Serif', serif;
}
 .container {
	 width: 840px;
	 margin: 0 auto;
}
 header {
	 font-family: 'Bree Serif', serif;
	 text-align: center;
	 margin: 50px 0 25px;
	 color: #34495e;
}
 header p {
	 margin: 0;
	 color: rgba(52, 73, 94, 0.4);
}
 


</style>