<template>
  <section>
    <!-- <stay-list :stays="stays" v-if="stays" /> -->
  </section>
</template>
<script>
// import staylist from '@/cmps/stay-list.vue'
export default {
  components: {
    // staylist,
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
  },
  created() {
    // this.$store.dispatch({ type: "loadStays" });
  },
};
</script>
