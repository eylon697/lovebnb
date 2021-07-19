<template>
  <form class="stay-filter" @submit.prevent="goToFilterd">
    <div class="first">
      <label class="location">
        <div>
          <div>
           <div class="title">Location</div>
            <input
              type="text"
              list="countries"
              placeholder="Where are you going?"
              v-model="filterBy.country"
              @input="loadCountries"
            />
            <datalist id="countries">
              <!-- <option v-for="(country, idx) in countries" :key="idx">
                {{ country }}
              </option> -->
            </datalist>
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="dates">
        <div class="check-in">
          <div>
            <div>
              <div class="title">Check in</div>
              <!-- <input type="date" v-model="filterBy.checkIn" /> -->
              <div class="date-value" v-if="filterBy.dates && filterBy.dates.length">
                {{ checkIn }}
              </div>
              <div class="placeholder" v-else>Add date</div>
            </div>
          </div>
        </div>
        <div class="sep"></div>
        <el-date-picker class="date-picker"
         v-model="filterBy.dates" 
         type="daterange"
         onPick="onPick(pick)"
         >
        </el-date-picker>
        <div class="check-out">
          <div>
            <div>
               <div class="title">Check out</div>
              <!-- <input type="date" v-model="filterBy.checkOut" /> -->
              <div class="date-value" v-if="filterBy.dates && filterBy.dates.length">
                {{ checkOut }}
              </div>
              <div class="placeholder" v-else>Add date</div>
            </div>
          </div>
        </div>
      </label>
      <div class="sep"></div>
      <label class="guests">
        <div>
          <div>
            <div class="title">Guests</div>
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
export default {
  data() {
    return {
      countries: null,
      filterBy: this.$store.getters.filterBy,
    };
  },
  computed: {
    checkIn() {
      if (!this.filterBy.dates || !this.filterBy.dates.length) return null;
      return utilService.toShortFormat(this.filterBy.dates[0]);
    },
    checkOut() {
      if (!this.filterBy.dates || !this.filterBy.dates.length) return null;
      return utilService.toShortFormat(
        this.filterBy.dates[this.filterBy.dates.length - 1]
      );
    },
  },
  methods: {
    onPick(pick){
      console.log('onPick',pick);
    },
    async loadCountries() {},
    goToFilterd() {
      if (this.filterBy.country) this.filterBy.mainFilter = "country";
      else if (this.filterBy.propertyType)
        this.filterBy.mainFilter = "propertyType";
      else if (this.filterBy.checkIn) this.filterBy.mainFilter = "checkIn";
      else if (this.filterBy.guests) this.filterBy.mainFilter = "guests";
      const filterUrl = utilService.objToUrl(this.filterBy);
      this.$router.push(`/stay?${filterUrl}`);
    },
  },
};
</script>
