<template>
  <header class="app-header main-layout" :class="classObject">
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
          <router-link class="host" to="stay/profile">Become a host</router-link>
        </nav>
        <div @click.stop="openModal" class="preference">
          <i class="fas fa-bars"></i>
          <button class="btn-user">
            <img :src="require('@/assets/img/app-header/user.png')" />
          </button>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div v-if="isOpen" class="bottom">
      <stay-filter />
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
      scrollDiff: 0,
    };
  },
  computed: {
    classObject() {
      return {
        open: this.isOpen,
        "home-top": this.$route.name === "HomePage" && !this.scrollDiff,
      };
    },
    userId(){
      const user = this.$store.getters.loggedinUser
			if (user && user?._id) {
				return user._id
			} else {
				return ''
			}

    }
  },
  created() {
    if (this.$route.name === "HomePage") this.openHeader();
    eventBus.$on("closeHeder", this.closeHeader);
    window.addEventListener("scroll", this.onScroll);
    console.log("this.$route.name", this.$route.name);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    openHeader() {
      if (this.scrollDiff || this.$route.name !== "HomePage")
        this.$emit("openScreen");
      this.isOpen = true;
    },
    closeHeader() {
      console.log("header");
      this.$emit("closeScreen");
      this.isOpen = false;
    },
    onScroll(ev) {
      this.scrollDiff = ev.path[1].scrollY;
      if (this.scrollDiff) {
        this.closeHeader();
      } else if (this.$route.name === "HomePage") {
        this.openHeader();
      }
    },
    openModal(){
      this.$emit('openModal')
    }
  },
};
</script>
