<template>
  <form class="stay-filter" @submit="goToFilterd">
    <div class="first">
      <label class="location">
        <div>
          <div>
            <div>Location</div>
            <input
              type="text"
              list="countries"
              placeholder="Where are you going?"
              v-model="filterBy.country"
              @input="loadCountries"
            />
            <datalist id="countries">
              <option v-for="(country, idx) in countries" :key="idx">{{country}}</option>
            </datalist>
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="check-in">
        <div>
          <div>
            <div>Check in</div>
            <input type="date" v-model="filterBy.checkIn" />
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="check-out">
        <div>
          <div>
            <div>Check out</div>
            <input type="date" v-model="filterBy.checkOut" />
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="guests">
        <div>
          <div>
            <div>Guests</div>
            <input
              type="text"
              placeholder="Add guests"
              v-model="filterBy.guests"
            />
          </div>
        </div>
      </label>
    </div>
    <button>
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
import { utilService } from "@/services/util.service.js";
import {stayService } from "@/services/stay.service.js";
export default {
  data() {
    return {
      countries:null,
      filterBy: this.$store.getters.filterBy,
    };
  },
  methods: {
    async loadCountries(){
      this.countries = await stayService.getCountries(this.filterBy.countries) 
    },
    goToFilterd() {
      const filterUrl = utilService.objToUrl(this.filterBy);
      this.$router.push(`/stay?${filterUrl}`);
    },
  },
};
</script>
