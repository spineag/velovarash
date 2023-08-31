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

        <!-- <l-control-zoom position="bottomright" zoom-in-text="*" zoom-out-text="/" /> -->
        
        <!-- <l-circle :lat-lng="[51.3426, 25.9672]" :radius="500" color="green" /> -->
        <l-circle-marker :lat-lng="[51.34317, 25.96688]" :radius="10" color="#059669" fillOpacity=1 fillColor="#059669" />
        <l-circle-marker :lat-lng="[51.49247, 25.76043]" :radius="10" color="orange" fillOpacity=1 fillColor="orange" />

      </l-map>
    </div>
    <div class="w-full velo_bg_map inner_shadow">

    </div>
  </template>

  <script>
  import {
    LMap,
    // LIcon,
    LTileLayer,
    // LMarker,
    LControlLayers,
    // LControlZoom, :scrollWheelZoom="false"
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
      // LControlZoom,
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
.inner_shadow{
    z-index: 999;
    box-shadow: inset 0px 3px 3px rgb(0,0,0,0.25), inset 0px -3px 3px rgb(0,0,0,0.25);
    pointer-events: none;
}
  </style>

  <style>
  .leaflet-container{
    pointer-events: none !important;
  }
  .leaflet-tile-container{
    filter: grayscale(.7)  brightness(107%);
  }
  .leaflet-control-zoom{
    /* display: none; */
  }
  </style>