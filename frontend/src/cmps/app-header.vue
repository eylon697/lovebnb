<template>
  <header class="app-header main-layout" :class="classObject">
    <div class="top">
      <div class="logo">
        <router-link to="/">
          <i class="fab fa-airbnb"></i>
          <span>lovebnb</span>
        </router-link>
      </div>
      <div class="middle">
        <div class="places" v-if="isOpen">
           <div class="explore" @click="goToExplore">Explore</div>
          <!-- <div>Places to stay</div> -->
          <!-- <div class="sep"></div> -->
        </div>
        <button v-else @click.stop="openHeader">
          <span>Start your search</span>
          <!-- <span> {{searchToShow}}</span> -->
          <i class="fas fa-search"></i>
        </button>
      </div>

      <div class="right">
        <profile-modal
          v-if="isUserModalOpen"
          @login="login"
          @onSignUp="onSignUp"
          @logout="logout"
          @closeUserModal="closeUserModal"
        />
        <!-- TODO:PAGE HOST -->
        <nav>
          <router-link class="host" to="stay/profile"
            >Become a host</router-link
          >
        </nav>
        <div @click.stop="openUserModal" class="preference">
          <i class="fas fa-bars"></i>
          <button class="btn-user">
            <img
              v-if="!loggedinUser"
              :src="require('@/assets/img/app-header/user.png')"
            />
            <img
              class="user-img"
              v-else
              :src="loggedinUser.imgUrl"
            />
          </button>
          <div v-if="isWarningOpen" class="warning">1</div>
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
import profileModal from "../cmps/profile-modal.vue";

export default {
  props: {
    isWarningOpen: Boolean,
  },
  components: {
    stayFilter,
    profileModal,
  },
  data() {
    return {
      isOpen: false,
      scrollDiff: 0,
      isUserModalOpen: false,
    };
  },
  computed: {
    filterBy(){
     return this.$store.getters.filterBy
    },
    classObject() {
      return {
        open: this.isOpen,
        home: this.$route.name === "HomePage",
        top: !this.scrollDiff,
      };
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },

  },
  created() {
    if (this.$route.name === "HomePage") this.openHeader();
    eventBus.$on("closeHeder", this.closeHeader);
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    searchToShow(){
      if (this.filterBy.city==="") return 'start your search'
      else return this.filterBy.city
    },
    goToExplore() {
      this.$router.push(`/stay`);
    },
    openHeader() {
      if (this.scrollDiff || this.$route.name !== "HomePage")
        this.$emit("openScreen");
      this.isOpen = true;
    },
    closeHeader() {
      this.$emit("closeScreen");
      this.isOpen = false;
    },
    closeUserModal() {
      this.isUserModalOpen = !this.isUserModalOpen;
    },
    onScroll(ev) {
      this.scrollDiff = ev.path[1].scrollY;
      if (this.scrollDiff) {
        this.closeHeader();
      } else if (this.$route.name === "HomePage") {
        this.openHeader();
      }
    },
    openUserModal() {
      this.isUserModalOpen = !this.isUserModalOpen;
      console.log("APP", this.isUserModalOpen);
    },
    login() {
      this.$emit("login");
    },
    onSignUp() {
      this.$emit("signUp");
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>
