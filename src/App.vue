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
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import {eventBus} from './services/event-bus.service.js'
export default {
  components: {
    appHeader,
    appFooter,
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

