<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
    <user-msg />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import userMsg from "./cmps/user-msg.vue";

export default {
  components: {
    appHeader,
    appFooter,
    userMsg
  }
};
</script>

