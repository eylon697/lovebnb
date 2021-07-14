<template>
  <div class="home-page">
    <hero></hero>
    <div>
       <h5>Inspiration destinations</h5>
      <div class="cities">
        <div clas="city">
      <router-link  to="/"> <img :src="require('@/assets/img/1.png')" /></router-link>
         <h4>New York</h4>
        </div>
         <div clas="city">
      <router-link  to="/"> <img :src="require('@/assets/img/2.png')" /></router-link>
      <h4>Tel-Aviv</h4>
        </div>
          <div clas="city">
      <router-link  to="/"> <img :src="require('@/assets/img/3.png')" /></router-link>
       <h4>Paris</h4>
        </div>
        <div clas="city">
      <router-link  to="/"> <img :src="require('@/assets/img/4.png')" /></router-link>
       <h4>Amsterdam</h4>
        </div>
          </div>

    </div>
  </div>
</template>

<script>
import Hero from "../cmps/hero.vue";

export default {
  components: {
    Hero,
  },
};
</script>

}
