<template>
  <div id="app">
    <app-header :fixedStyle="headerFixedStyle"
    @toggleFixed="headerFixedToggle" />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";

export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      headerFixedStyle: false,
    };
  },
  methods: {
    headerFixedToggle() {
      this.headerFixedStyle = !this.headerFixedStyle;
    },
  },
};
</script>

