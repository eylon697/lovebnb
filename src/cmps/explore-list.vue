<template>
  <section class="explore-list">
    <h5 class="headeline">{{ list.headline }}</h5>
    <div class="items-container">
      <div v-for="(item, idx) in list.items" :key="idx">
        <div clas="card-explore" @click="goTo(item.title)">
          <img :src="item.imgUrl" />
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { utilService } from "../services/util.service.js";
export default {
  props: {
    list: Object,
  },
  computed: {
    filterBy() {
      return this.$store.getters.filterBy;
    },
  },
  methods: {
    goTo(filterVal) {
      if (this.list.headline === "Live anywhere")
        this.filterBy.propertyType = filterVal;
      else if (this.list.headline === "Inspiration destinations")
        this.filterBy.city = filterVal;
      const filterUrl = utilService.objToUrl()
      this.$router.push(`/stay?${filterUrl}`);
    },
  },
};
</script>
