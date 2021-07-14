<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">  <img :src="require('@/assets/img/logo.png')" /></div>
      <stay-filter/>
      <div class="stay-filter">
        <button class="btn-start-search">Start Your search<span><i class="far fa-search"></i></span></button>
       
      </div>
      <nav>
        <router-link to="/" >Explore </router-link>
        <router-link  to="/">Become a Host</router-link>
      </nav>

      <div class="user">
          <button class="btn-user"> <img :src="require('@/assets/img/user.png')" /> </button>
          <!-- <button><img src="" alt=""></button>  -->
      </div>
    </div>
  </header>
</template>
<script>
import stayFilter from '../cmps/stay-filter.vue'
export default {
  components:{
    stayFilter
  }
};
</script>
