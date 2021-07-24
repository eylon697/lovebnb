<template>
  <div id="app">
    <app-header
      @openScreen="openScreen"
      @closeScreen="closeScreen"
      @login="login"
      @signUp="onSignUp"
      @logout="logout"
      :isWarningOpen="isWarningOpen"
    />
    <login @login="login" v-if="isLoginOpen" />
    <signup @signUp="signUp" v-if="isSignupOpen" @onSignUp="onSignUp" />
    <user-msg />
    <div
      v-if="isScreenOpen || isLoginOpen || isSignupOpen"
      class="screen"
      @click="closeHeder"
    ></div>
    <div v-if="isLoginOpen || isSignupOpen" class="screen-blocking"></div>
    <router-view @warning="openWarning" />
    <app-footer />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import { eventBus } from "./services/event-bus.service.js";
import userMsg from "./cmps/user-msg.vue";
import login from "./cmps/login.vue";
import signup from "./cmps/signup.vue";
import { showMsg } from "@/services/event-bus.service";

export default {
  components: {
    appHeader,
    appFooter,
    userMsg,
    login,
    signup,
  },
  data() {
    return {
      isScreenOpen: false,
      isLoginOpen: false,
      isSignupOpen: false,
      isWarningOpen: false,
    };
  },
  created() {
    window.addEventListener("click", this.bodyClick);
  },
  destroyed() {
    window.removeEventListener("click", this.bodyClick);
  },
  methods: {
    openScreen() {
      this.isScreenOpen = true;
    },
    closeScreen() {
      this.isScreenOpen = false;
    },
    closeHeder() {
      console.log("app");
      eventBus.$emit("closeHeder");
    },
    bodyClick() {
      this.isLoginOpen = false;
      this.isSignupOpen = false;
    },
    login() {
      this.isLoginOpen = !this.isLoginOpen;
    },

    onSignUp() {
      this.isSignupOpen = !this.isSignupOpen;
    },
    openWarning() {
      this.isWarningOpen = !this.isWarningOpen;
      console.log(this.isWarningOpen);
    },

    async signUp(userCred) {
      try {
        console.log(userCred);
        await this.$store.dispatch({ type: "signup", userCred });
        console.log("app", userCred);
        showMsg("Signed up successfully!");
        this.isSignupOpen = !this.isSignupOpen;
      } catch (err) {
        showMsg("Sign up failed!", "error");
        this.isSignupOpen = !this.isSignupOpen;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch({ type: "logout" });
        this.$router.push("/");
        showMsg("Logged out!");
      } catch (err) {
        showMsg("Logout failed!", "error");
      }
    },
  },
};
</script>

