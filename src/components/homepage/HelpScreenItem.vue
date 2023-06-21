<script setup>

</script>

<template>
    <div class="help_item">
        <div class="help_cont">
            <div class="help_title">Обслуговування</div>
            <ul>
                <li>Передні та задні передачі</li>
                <li>Чистка та смазка цепу</li>
                <li>Гідравлічні тормоза</li>
                <li>Механічні тормоза</li>
                <li>Покраска сідла</li>
            </ul>
            <div class="help_avatar">
                <img src="../../assets/img/ava_small.jpg" alt=""/>
            </div>
        </div>
        <div class="help_overlay">
            <div class="help_overlay_img" style="background-image: url('src/assets/img/repair_man1.png');"> </div>
            <div class="help_overlay_line">
                <span>099 999 99 99</span>
                <span>Володимирко</span>
            </div>
        </div>
       
        
    </div>
</template>

<style scoped>
.help_item{
    width:100%;
    height:220px;
    cursor: pointer;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: block;
}
.help_cont{
    width: 100%;
    height: 100%;
    padding: 20px;
}
.help_title{
    font-weight: bold;
    font-size: 18px;
}
.help_cont ul{
    list-style-type: square;
    list-style-position: outside;
}
.help_cont li{
    margin-left: 15px;
}
.help_avatar{
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.help_avatar img{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
}
.help_overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .1s ease;
}
.help_overlay_img{
    width: 100%;
    height: 190px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.help_overlay_line{
    height:30px;
    width:100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
}
.help_item:hover .help_overlay {
  opacity: 1;
}
</style>