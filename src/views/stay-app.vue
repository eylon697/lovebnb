<template>
  <section class="stay-app main-layout">
    <list-filter
      v-if="stays && unfiltered"
      :filterBy="filterBy"
      :stays="stays"
      @filter="setFilter"
      :unfiltered="unfiltered" />
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
   methods: {
    setFilter(filterBy) {
      console.log(filterBy);
      this.$store.commit({ type: 'setFilter', filterBy });
      this.$store.dispatch({ type: 'loadStays' });
    },
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    unfiltered() {
      return this.$store.getters.unfiltered;
    },
     filterBy() {
     return this.$store.getters.filterBy;
    },
  },
  created() {
    const filterBy = this.$route.query;
    this.$store.dispatch({ type: "loadStays", filterBy });
  },
};
</script>
