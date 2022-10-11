<template>
  <div style="height: 300px; width: 100%">
    <div style="height: 25%; overflow: auto; background-color: white;">
      <p>First marker is placed at {{ withPopup.lat }}, {{ withPopup.lng }}</p>
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      <!-- <p >{{theater.location.geo.coordinates}}</p> -->
      <!-- <Button @click="showLongText">
        Toggle long popup
      
      </Button> -->

      <Button type="button" icon="pi pi-map" @click="showMap = !showMap">
      </Button>
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />

      <div
        class="circle-map"
        v-for="theater in theaters"
        :key="theater.location.geo"
      >
        <l-circle-marker
          :lat-lng="theater.location.geo.coordinates"
          :radius="circle.radius"
          :color="circle.color"
        >
          <!-- <l-tooltip :options="{ permanent: true, interactive: true }">
          </l-tooltip> -->
        </l-circle-marker>
      </div>

      <!-- <l-circle-marker
        :lat-lng="withTooltip"
        :radius="circle.radius"
        :color="circle.color"
      >
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            proximo
          </div>
        </l-tooltip>


      </l-circle-marker> -->
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LCircleMarker
} from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LCircleMarker
  },
  props: {
    theaters: {
      type: Array
    }
  },
  data() {
    return {
      zoom: 2,
      center: latLng(-93.24565, 44.85466),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(-93.24565, 44.85466)  ,//proximo
      circle: {
        radius: 1,
        color: "red"
      },
      currentZoom: 11.5,
       currentCenter: latLng(-93.24565, 44.85466),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  mounted() {
    this.theaters;
  }
};
</script>
