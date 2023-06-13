<template>
    <div class="w-full velo_bg_map">
      <l-map 
        :useGlobalLeaflet="false"
        :minZoom="8"
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[51.3489, 25.8526]"
        @move="log('move')"
      >
        <l-tile-layer
          layer-type="base"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>

        <!-- <div class="overlay_map_black"></div> -->
        
        <!-- <l-control-layers /> -->
        <!-- <l-marker :lat-lng="[0, 0]" draggable @moveend="log('moveend')">
          <l-tooltip>
            lol
          </l-tooltip>
        </l-marker> -->
  
        <!-- <l-marker :lat-lng="[51.3489, 25.8526]">
          <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
        </l-marker> -->
  
        <!-- <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
          <l-popup>
            lol
          </l-popup>
        </l-marker> -->
  
        <!-- <l-polyline
          :lat-lngs="[
            [47.334852, -1.509485],
            [47.342596, -1.328731],
            [47.241487, -1.190568],
            [47.234787, -1.358337],
          ]"
          color="green"
        ></l-polyline> -->
        <!-- <l-polygon
          :lat-lngs="[
            [46.334852, -1.509485],
            [46.342596, -1.328731],
            [46.241487, -1.190568],
            [46.234787, -1.358337],
          ]"
          color="#41b782"
          :fill="true"
          :fillOpacity="0.5"
          fillColor="#41b782"
        /> -->
        <!-- <l-rectangle
          :lat-lngs="[
            [46.334852, -1.509485],
            [46.342596, -1.328731],
            [46.241487, -1.190568],
            [46.234787, -1.358337],
          ]"
          :fill="true"
          color="#35495d"
        /> -->
        <!-- <l-rectangle
          :bounds="[
            [46.334852, -1.190568],
            [46.241487, -1.090357],
          ]"
        >
          <l-popup>
            lol
          </l-popup>
        </l-rectangle> -->
      </l-map>
      <!-- <button @click="changeIcon">New kitten icon</button> -->
    </div>
  </template>

  <script>
  import {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  
  export default {
    components: {
      LMap,
      LIcon,
      LTileLayer,
      LMarker,
      LControlLayers,
      LTooltip,
      LPopup,
      LPolyline,
      LPolygon,
      LRectangle,
    },
    data() {
      return {
        zoom: 12,
        iconWidth: 25,
        iconHeight: 40,
      };
    },
    computed: {
      iconUrl() {
        return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
      },
      iconSize() {
        return [this.iconWidth, this.iconHeight];
      },
    },
    methods: {
      log(a) {
        console.log(a);
      },
      changeIcon() {
        this.iconWidth += 2;
        if (this.iconWidth > this.iconHeight) {
          this.iconWidth = Math.floor(this.iconHeight / 2);
        }
      },
    },
  };
  </script>

  <style scoped>
  .velo_bg_map{
    height:800px;
    padding: 0;
    margin:0;
    position: absolute;
    top:0;
  }
  /* .overlay_map_black{
    background-color: black;
    opacity: 0.2;
    width: 100%;
    height: 800px;
    z-index: 900;
  } */
  .leaflet-tile-pane{
    filter: grayscale(1);
  }
  </style>