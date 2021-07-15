<template>
  <header class="app-header">
    <!-- START OF MAIN LAYOUT -->
    <div class="top">
      <div class="logo">
        <span><i class="fab fa-airbnb"></i> </span> 
        <!-- <img :src="require('@/assets/img/app-header/logo.png')" /> -->
        <span>lovebnb</span>
      </div>

      <div class="middle">
        <div>Place to stay</div>
        <div class="sep"></div>
        <button class="btn-start-search">
          <span>Start Your search</span>
          <i class="far fa-search"></i>
        </button>
      </div>

      <div class="right">
        <nav>
          <router-link to="/">Become a host</router-link>
        </nav>
        <div class="preference">
          <i class="fas fa-bars"></i>
          <button class="btn-user">
            <img :src="require('@/assets/img/app-header/user.png')" />
          </button>
        </div>
        <!-- <button><img src="" alt=""></button>  -->
      </div>
    </div>
    <div class="bottom">
      <stay-filter />
    </div>
    <!-- END OF MAIN LAYOUT -->
  </header>
</template>
<script>
import stayFilter from "../cmps/stay-filter.vue";
export default {
  
  components: {
    stayFilter,
  },
};
</script>
