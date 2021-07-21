<template>
  <div id="app">
    <app-header
      @openScreen="openScreen"
      @closeScreen="closeScreen"
      @openModal="openModal"
    />
    <profil-modal
      :isModalOpen="isModalOpen"
      @login="login"
      @onSignUp="onSignUp"
       @closeModal="closeModal"
         @logout="logout"

    />
     <login @login="login" v-if="isLoginOpen" /> 
    <signup @signUp="signUp" v-if="isSignupOpen" @onSignUp="onSignUp" />
    <user-msg />
    <div v-if="isScreenOpen" class="screen" @click="closeHeder"></div>
    <router-view />
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
import profilModal from "./cmps/profil-modal.vue";
import { showMsg } from '@/services/event-bus.service';

export default {
  components: {
    appHeader,
    appFooter,
    userMsg,
    login,
    signup,
    profilModal,
  },
  data() {
    return {
      isScreenOpen: false,
      isModalOpen: false,
      isLoginOpen: false,
      isSignupOpen: false,
    };
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
    openModal() {
      this.isModalOpen = !this.isModalOpen;
      console.log("APP", this.isModalOpen);
    },
    login() {
      this.isLoginOpen = !this.isLoginOpen;
    },
    onSignUp() {
      this.isSignupOpen = !this.isSignupOpen;
    },
        closeModal() {
     this.isModalOpen = !this.isModalOpen;
    },
     async signUp(userCred) {

      try {
        await this.$store.dispatch({ type: 'signup', userCred });
        console.log('app',userCred);
        showMsg('Signed up successfully!');
         this.isSignupOpen = !this.isSignupOpen;
      } catch (err) {
        showMsg('Sign up failed!', 'error');
        this.isSignupOpen = !this.isSignupOpen;
      }
    },
     async logout() {
      try {
        await this.$store.dispatch({ type: 'logout' });
        this.$router.push('/');
        showMsg('Logged out!');
      } catch (err) {
        showMsg('Logout failed!', 'error');
      }
    },
  },
};
</script>

