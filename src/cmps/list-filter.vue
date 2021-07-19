<template>
  <form class="list-filter">
    <button ref="priceBtn" @click.stop="onChangePrice">
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
      filterByLocal: this.filterBy || {},
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
    setFilter() {
      this.$emit("filter", this.filterBy);
    },
    clearFilter() {
      const filter = {
        price: [0, 1500],
        types: [],
        amenities: [],
        city: "",
      };
      this.$emit("filter", filter);
    },
  },
  computed: {
    priceToShow() {
      //   if (this.filterBy.minPrice !== 0 && this.filterBy.maxPrice !== 0) {
      if (this.filterBy.price[0] !== 0 && this.filterBy.price[1] !== 0) {
        return `$${this.filterBy.price[0]} - $${this.filterBy.price[1]}`;
      } else {
        return "Price";
      }
    },
    typeToShow() {
      if (this.filterBy.propertyType !== "") {
        return this.filterBy.propertyType;
      } else {
        return "Types";
      }
    },

	amenitiesToShow() {
      if (this.filterBy.amenities.length) {
        return this.filterBy.amenities.join(',');
      } else {
        return 'Amenities';
      }
	},
	
    typesPos() {
      return this.$refs.priceBtn.offsetWidth + 200;
    },

  },
};
</script>

<style></style>