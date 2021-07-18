<template>
  <section>
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 480px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
        :clickable="true"
        @click="center = m"
        :icon="{ url: require('../assets/img/stay-details/home.png') }"
      />
    </GmapMap>
  </section>
</template>

<script>
export default {
  props: { loc: Object },
  data() {
    return {
      markers: [],
    };
  },
  computed: {
    center() {
      return {
        lat: parseFloat(this.loc.lat),
        lng: parseFloat(this.loc.lng),
      };
    },
  },
  created() {
    this.markers.push({
      lat: parseFloat(this.loc.lat),
      lng: parseFloat(this.loc.lng),
    });
  },
};
</script>

<style></style>