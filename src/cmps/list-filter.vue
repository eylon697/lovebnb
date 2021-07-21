<template>
  <form class="list-filter">
    <button ref="priceBtn" @click.stop="onChangePrice">Price</button>

    <div @click.stop class="price-modal" v-if="priceOpen">
      <el-slider
        style="color: black"
        v-model="filterBy.price"
        range
        :max="1500"
      >
      </el-slider>

      <div class="price-container">
        <input v-model="filterBy.price[0]" class="from-price" />
        <input v-model="filterBy.price[1]" class="to-price" />
      </div>
      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="loadStays">Update</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    filterBy: Object,
    stays: Array,
  },
  data() {
    return {
      priceOpen: false,
      typeOpen: false,
      amenitiesOpen: false,
    };
  },
  methods: {
    onChangePrice() {
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
    closeModals() {
      this.isTypesModalOpen = false;
      this.isPriceModalOpen = false;
      this.isAmenitiesModalOpen = false;
    },
    loadStays() {
      this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
    },
    clearFilter() {
      this.filterBy.price = [0, 1500];
      this.filterBy.types = [];
      this.filterBy.amenities = [];
      this.filterBy.city = "";
      this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
    },
  },
  computed: {
    // priceToShow() {
    //   //   if (this.filterBy.minPrice !== 0 && this.filterBy.maxPrice !== 0) {
    //   // if (this.filterBy.price[0] !== 0 && this.filterBy.price[1] !== 0) {
    //   //   return `$${this.filterBy.price[0]} - $${this.filterBy.price[1]}`;
    //   // } else {
    //   //   return "Price";
    //   // }
    // },
    typeToShow() {
      if (this.filterBy.propertyType !== "") {
        return this.filterBy.propertyType;
      } else {
        return "Types";
      }
    },

    amenitiesToShow() {
      if (this.filterBy.amenities.length) {
        return this.filterBy.amenities.join(",");
      } else {
        return "Amenities";
      }
    },
    typesPos() {
      return this.$refs.priceBtn.offsetWidth + 200;
    },
  },
};
</script>

<style></style>