<template>
  <header :class="classObject">
    <!-- <div class="top-container"> -->
      <div class="top">
        <div class="logo">
          <router-link to="/">
            <i class="fab fa-airbnb"></i>
            <span>lovebnb</span>
          </router-link>
        </div>
        <div class="middle">
          <div class="places" v-if="isOpen">
            <div>Places to stay</div>
            <div class="sep"></div>
          </div>
          <button v-else @click.stop="openHeader">
            <span>Start your search</span>
            <i class="fas fa-search"></i>
          </button>
        </div>

        <div class="right">
          <nav>
            <router-link to="/">Become a host</router-link>
          </nav>
          <div class="preference">
            <i class="fas fa-bars"></i>
            <button class="btn-user">
              <img :src="require('@/assets/img/app-header/user.png')" />
            </button>
          </div>
        </div>
      </div>
    <!-- </div> -->
    <div class="bottom">
      <stay-filter v-if="isOpen" />
    </div>
  </header>
</template>
<script>
import stayFilter from "../cmps/stay-filter.vue";
import { eventBus } from "../services/event-bus.service";
export default {
  components: {
    stayFilter,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    classObject() {
      return {
        "app-header": true,
        "main-layout": true,
        open: this.isOpen,
      };
    },
  },
  created() {
    eventBus.$on("openHeader", this.openHeader);
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    openHeader() {
      console.log("open header");
      this.isOpen = true;
    },
    closeHeader() {
      console.log("close header");
      this.isOpen = false;
    },
    onScroll(ev) {
      let scrollDiff = ev.path[1].scrollY;
      if (scrollDiff >= 1 || scrollDiff <= -1) {
        this.closeHeader();
      }
    },
  },
};
</script>
