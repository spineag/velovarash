<template>
    <div class="w-full velo_bg_map">
      <l-map 
        :useGlobalLeaflet="false"
        :minZoom="8"
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[51.3939, 25.8607]" 
        @move="log('move')"
      >
        <l-tile-layer
          layer-type="base"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>

        <l-geo-json :geojson="geojson" :options-style="geoStyler"></l-geo-json>
        
        <!-- <l-circle :lat-lng="[51.3426, 25.9672]" :radius="500" color="green" /> -->
        <l-circle-marker :lat-lng="[51.34317, 25.96688]" :radius="10" color="#059669" fillOpacity=1 fillColor="#059669" />
        <l-circle-marker :lat-lng="[51.49247, 25.76043]" :radius="10" color="orange" fillOpacity=1 fillColor="orange" />

        <!-- <l-control-layers />     -->
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
    // LIcon,
    LTileLayer,
    // LMarker,
    LControlLayers,
    // LTooltip,
    // LPopup,
    // LPolyline,
    // LPolygon,
    // LRectangle,
    LGeoJson,
    // LCircle,
    LCircleMarker,
  } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  
  export default {
    components: {
      LMap,
      // LIcon,
      LTileLayer,
      // LMarker,
      LControlLayers,
      // LTooltip,
      // LPopup,
      // LPolyline,
      // LPolygon,
      // LRectangle,
      LGeoJson,
      // LCircle,
      LCircleMarker,
    },
    data() {
      return {
        zoom: 11,
        geojson: undefined,
        geoStyler: (feature) => ({
          // https://leafletjs.com/reference.html#path-option
          color: '#0891B2',
          weight: 10
        }),
      };
    },
    computed: {

    },
    methods: {
      // log(a) {
      //   console.log(a);
      // },
      // changeIcon() {
      //   this.iconWidth += 2;
      //   if (this.iconWidth > this.iconHeight) {
      //     this.iconWidth = Math.floor(this.iconHeight / 2);
      //   }
      // },
    },
    async created() {
      const response = await fetch("https://raw.githubusercontent.com/spineag/velovarash/master/src/assets/geojson/50velowatt.geojson");
      this.geojson = await response.json();
    },
  };
  </script>

  <style scoped>
  .velo_bg_map{
    height:750px;
    padding: 0;
    margin:0;
    position: absolute;
    top:0;
  }
  </style>

  <style>
  .leaflet-tile-container{
    filter: grayscale(.7)  brightness(107%);
  }
  .leaflet-control-zoom{
    display: none;
  }
  </style>