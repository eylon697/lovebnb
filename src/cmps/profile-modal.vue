
<template>
  <div class="profile-modal" @click.stop="closeUserModal">
    <!-- <button v-if="isLoggedinUser"> -->
      <router-link  v-if="isLoggedinUser" class="trip" :to="'/trips/' + userId">
        <span>Trips</span>
      </router-link>
      <router-link  v-if="isLoggedinUser" class="deshboard" :to="'/deshboard/' + userId">
        <span>Deshboard</span>
      </router-link>
    <!-- </button> -->
    <button v-if="!isLoggedinUser" @click.stop="login">Login</button>
    <button v-if="!isLoggedinUser" @click.stop="onSignUp">SignUp</button>
    <button @click.stop="addStay">Host your home</button>
    <!-- TODO:Host -->
    <button v-if="isLoggedinUser" @click.stop="logout">Logout</button>
    <button @click.stop="">Help</button>
    <!-- TODO:help modal -->
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$emit("login");
      this.$emit("closeUserModal");
    },
    onSignUp() {
      this.$emit("onSignUp");
      this.$emit("closeUserModal");
    },
    addStay() {
      this.$emit("addStay");
      this.$emit("closeUserModal");
    },
    logout() {
      this.$emit("logout");
      this.$emit("closeUserModal");
    },
    closeUserModal() {
      this.$emit("closeUserModal");
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
