<template>
  <section @click.stop class="signup">
    <div class="header">
      <button @click.stop="onSignUp">
        <span> x </span>
      </button>
      <p>Sign up</p>
    </div>
    <div class="signup-input">
      <div class="input-txt">
        <h2>Welcome to Lovebnb</h2>
      </div>
      <form @submit.prevent="signUp">
        <input
          type="text"
          placeholder="Enter email or userName"
          v-model="userCred.userName"
        />
        <input
          type="text"
          placeholder="Enter full name"
          v-model="userCred.fullName"
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
export default {
  data() {
    return {
      userCred: {
        userName: "",
        fullName: "",
        password: "",
      },
    };
  },
  methods: {
    onSignUp() {
      this.$emit("onSignUp", false);
    },
    signUp() {
      console.log(this.userCred);
      this.$emit("signUp", this.userCred);
    },
  },
  mounted() {
    this.$refs.myBtn.onmousemove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  },
};
</script>