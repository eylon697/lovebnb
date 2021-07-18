<template>
  <section class="stay-app">
    <list-filter v-if="stays" :stays="stays" />
    <stay-list :stays="stays" v-if="stays" />
  </section>
</template>
<script>
import stayList from "@/cmps/stay-list.vue";
import listFilter from "@/cmps/list-filter.vue";
export default {
  components: {
    stayList,
    listFilter,
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
  },
  created() {
    const filterBy = this.$route.query;
    this.$store.dispatch({ type: "loadStays", filterBy });
  },
};
</script>
