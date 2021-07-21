
<template>
  <div v-if="isModalOpen" class="profile-modal" @click.stop="closeModal">
    <router-link :to="'/profile/' + userId" v-if="isLoggedinUser">
      <span>Account</span>
    </router-link>
    <button v-if="!isLoggedinUser" @click.stop="login">Login</button>
		<button v-if="!isLoggedinUser" @click.stop="onSignUp">Signup</button>
		<button @click.stop="addStay">Host your home</button>
		<button v-if="isLoggedinUser" @click.stop="logout">Logout</button> 
     <!-- <button @click.stop="">Help</button>TODO:help modal -->
  </div>
</template>

<script>
export default {
  props: {
    isModalOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    login() {
      this.$emit("login");
      this.$emit("closeModal");
    },
    onSignUp() {
      this.$emit("onSignUp");
      this.$emit("closeModal");
    },
    addStay() {
      this.$emit("addStay");
      this.$emit("closeModal");
    },
    logout() {
      this.$emit("logout");
      this.$emit("closeModal");
    },
  },
  computed: {
    userId() {
      const user = this.$store.getters.loggedinUser;
      if (user && user?._id) {
        return user._id;
      } else {
        return "";
      }
    },
    isLoggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
<style></style>
