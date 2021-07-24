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
          <!-- <div>Places to stay</div> -->
          <!-- <div class="sep"></div> -->
        </div>
        <button v-else @click.stop="openHeader">
          <span>Start your search</span>
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
        <!-- <img class="lng" :src="require('@/assets/img/icon/lng.svg')"> -->
         
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
              :src="require('@/assets/img/user/5.png')"
            />
          </button>
          <div v-if="isWarningOpen" class="warning"></div>
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
    classObject() {
      return {
        open: this.isOpen,
        "home-top": this.$route.name === "HomePage" && !this.scrollDiff,
      };
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },

    // userId(){
    //   const user = this.$store.getters.loggedinUser
    // 	if (user && user?._id) {
    // 		return user._id
    // 	} else {
    // 		return ''
    // 	}

    // }
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
