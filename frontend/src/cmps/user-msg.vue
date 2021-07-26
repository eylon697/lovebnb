<template>
  <div class="user-msg" v-if="alive" :class="msgClass">
    <div class="msg-container">
      <p>{{ msg.txt }}</p>
    </div>
    <button @click.stop="killMsg">
      <span>x</span>
    </button>
  </div>
</template>

<script>
import { eventBus, SHOW_MSG } from "@/services/event-bus.service.js";
export default {
  created() {
    eventBus.$on(SHOW_MSG, (msg, type = "error") => {
      console.log();
      this.type = type;
      this.msg = msg;
      var delay = msg.delay || 2000;
      this.alive = true;
      setTimeout(() => {
        this.alive = false;
      }, delay);
    });
  },
  data() {
    return {
      alive: false,
      msg: null,
      type: "error",
    };
  },
  methods: {
    killMsg() {
      this.alive = false;
    },
  },
  computed: {
    msgClass() {
      return {
        success: this.type === "success",
      };
    },
  },
};
</script>