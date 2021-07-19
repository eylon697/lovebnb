<template>


  <form class="list-filter">
    <button ref="priceBtn" @click.stop="changePrice">
      {{ priceToShow }}
    </button>
	

    <div @click.stop class="price-modal" v-if="priceOpen">
      <el-slider
        style="color: black"
        v-model="filterBy.price"
        range
        :max="1500"
      >
      </el-slider>


      <div class="price-container">
        <input
          v-model="filterByLocal.price[0]"
          class="from-price"
          placeholder="From"
        />
        <input
          v-model="filterByLocal.price[1]"
          class="to-price"
          placeholder="To"
        />
      </div>
      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="setFilter">Update</button>
      </div>
    </div>
  
  </form>
</template>

<script>
export default {
  props: {
    filterBy: Object,
    stays: Array,
    unfilteredStays: Array,
  },
  created() {
    // console.log(stays);
  },
  data() {
    return {
      priceOpen: false,
      typeOpen: false,
      amenitiesOpen: false,
	//    filterByLocal: this.filterBy || {},
    };
  },
  methods: {
    changePrice() {
      this.priceOpen = !this.priceOpen;
      this.typeOpen = false;
      this.amenitiesOpen = false;
    },
    changeTypes() {
      this.typeOpen = !this.typeOpen;
      this.priceOpen = false;
      this.amenitiesOpen = false;
    },
    changeAmenities() {
      this.amenitiesOpen = !this.isAmenitiesModalOpen;
      this.typeOpen = false;
      this.priceOpen = false;
    },
  },
  computed: {
    priceToShow() {
      if (this.filterBy.price[0] !== 0 && this.filterBy.price[1] !== 0) {
        return `$${this.filterBy.price[0]} - $${this.filterBy.price[1]}`;
      } else {
        return "Price";
      }
    },
    amenities() {
      return this.$store.getters.amenities;
    },
    propertyType() {
      return this.$store.getters.propertyType;
    },
  },
};
</script>

<style></style>