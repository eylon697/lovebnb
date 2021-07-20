<template>
  <div id="app">
    <app-header 
    @openScreen="openScreen"
    @closeScreen="closeScreen"
    />
    <div
      v-if="isScreenOpen"
      class="screen"
      @click="closeHeder"
    ></div>
    <router-view />
    <app-footer />
    <user-msg />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import {eventBus} from './services/event-bus.service.js'
import userMsg from "./cmps/user-msg.vue";

export default {
  components: {
    appHeader,
    appFooter,
    userMsg
  },
  data() {
    return { isScreenOpen: false };
  },
  methods: {
    openScreen() {
      this.isScreenOpen = true;
    },
    closeScreen() {
      this.isScreenOpen = false;
    },
    closeHeder() {
      console.log('app');
      eventBus.$emit('closeHeder')
    },
  },
};
</script>

