<template>
  <section class="stay-app main-layout">
    <list-filter
      v-if="stays"
      :filter="filterBy"
      :stays="stays"
      @filter="setFilter"
    />
    <stay-list
      :stays="stays"
      v-if="stays"
      :filterBy="filterBy"
      @filter="setFilter"
    />
  </section>
</template>
<script>
import stayList from "@/cmps/stay-list.vue";
import listFilter from "@/cmps/list-filter.vue";
// import { utilService } from "../services/util.service.js";
export default {
  components: {
    stayList,
    listFilter,
  },
  methods: {
    setFilter(filterBy) {
      console.log(filterBy);
      this.$store.commit({ type: "setFilter", filterBy });
      this.$store.dispatch({ type: "loadStays" });
    },
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    filterBy() {
      return this.$store.getters.filterBy;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
  },
};
</script>
