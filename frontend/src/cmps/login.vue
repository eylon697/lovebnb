<template>
  <section class="login" @click.stop>
    <div class="header">
      <button @click="close">
        <span> X </span>
      </button>
      <p>Log in</p>
    </div>
    <div class="login-input">
      <div class="input-txt">
        <h2>Welcome to Lovebnb</h2>
      </div>
      <form action="" @submit.prevent="login">
        <input
          type="text"
          placeholder="Enter email or userName"
          v-model="userCred.userName"
          ref="userNameInput"
        />
        <input
          type="password"
          placeholder="Enter password"
          v-model="userCred.password"
        />
        <button class="checkout-btn" ref="myBtn"><span>Continue</span></button>
      </form>
    </div>
  </section>
</template>

<script>
import { showMsg } from "@/services/event-bus.service.js";
export default {
  data() {
    return {
      userCred: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch({ type: "login", userCred: this.userCred });
        showMsg("Logged in successfully");
        this.close();
      } catch (err) {
        showMsg("Logged in failed", "error");
        console.log("err", err);
      }
    },
    close() {
      this.$emit("login", false);
    },
  },
  mounted() {
    this.$refs.userNameInput.focus();
    this.$refs.myBtn.onmousemove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  },
};
</script>