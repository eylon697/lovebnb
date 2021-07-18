<template>
  <section class="stat-app">
    <stay-list-filter v-if="stays" :stays="stays" />
    <stay-list :stays="stays" v-if="stays" />
  </section>
</template>
<script>
import stayList from "@/cmps/stay-list.vue";
import stayListFilter from "@/cmps/stay-list-filter.vue";
export default {
  components: {
    stayList,
    stayListFilter,
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
