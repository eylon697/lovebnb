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
        <input v-model="filterBy.price[0]" class="from-price" />
        <input v-model="filterBy.price[1]" class="to-price" />
      </div>
      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="loadStays">Update</button>
      </div>
    </div>

    <button @click.stop="onChangeTypes">
      {{ typeToShow }}
    </button>

    <div @click.stop class="types-modal" v-if="typeOpen">
      <div>
        <input
          v-model="filterBy.propertyType"
          type="radio"
          value=""
          id=""
        />
        <label for="All">ALL</label>
      </div>
      <div>
        <input
          v-model="filterBy.propertyType"
          type="radio"
          value="Entire apartment"
          id="Entire apartment"
        />
        <label for="Entire apartment">Entire apartment</label>
      </div>
      <div>
        <input
          v-model="filterBy.propertyType"
          type="radio"
          value="Hotel room"
          id="Hotel room"
        />
        <label for="Hotel room">Hotel room</label>
      </div>
      <div>
        <input
          v-model="filterBy.propertyType"
          type="radio"
          value="Outdoor getaways"
          id="Outdoor getaways"
        />
        <label for="Outdoor getaways">Outdoor getaways</label>
      </div>

      <div class="button-container">
        <button @click.stop="clearFilter">Clear</button>
        <button @click.stop="loadStays">Update</button>
      </div>
    </div>

    <!-- <button @click.stop="onChangeBeds">Rooms and beds</button>

    <div @click.stop class="beds-modal" v-if="bedsOpen"></div> -->
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
      bedsOpen: false,
    };
  },
  methods: {
    onChangePrice() {
      this.priceOpen = !this.priceOpen;
      this.typeOpen = false;
      this.bedsOpen = false;
    },
    onChangeTypes() {
      this.typeOpen = !this.typeOpen;
      this.priceOpen = false;
      this.bedsOpen = false;
    },
    onChangeBeds() {
      this.BedsOpen = !this.BedsOpen;
      this.typeOpen = false;
      this.priceOpen = false;
    },
    closeModals() {
      this.typeOpen = false;
      this.priceOpen = false;
      this.isAmenitiesModalOpen = false;
    },
    loadStays() {
      this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
      this.closeModals();
    },

    clearTypeFilter() {
      // this.filterBy.price = [0, 1500];
      this.filterBy.propertyType = "";
      // this.filterBy.amenities = [];
      this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
      this.closeModals();
    },

    clearPriceFilter() {
      this.filterBy.price = [0, 1500];
      // this.filterBy.propertyType = "";
      // this.filterBy.amenities = [];
      this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
      this.closeModals();
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

    typeToShow() {
      if (this.filterBy.propertyType === "") return "Types";
      else return this.filterBy.propertyType;
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