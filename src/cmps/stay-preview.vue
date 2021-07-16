<template>
  <section class="stay-preview">
    <!-- <el-carousel class="img-carousell"  trigger="click" height="170px" arrow="always"  :autoplay='false' :loop='false' -->
<!-- >  -->
     <!-- <el-carousel-item v-for="(imgUrl,idx) in stay.imgUrls" :key="idx">
        <img :src="require(`@/assets/img/stays/new_york/1/${imgUrl}`)" @click=" goToDetails(stay._id)">
      </el-carousel-item>
    </el-carousel>  -->
    
    <div class="left">

    <button @click="goToDetails(stay._id)">
      <img :src="require(`@/assets/img/stays/new_york/1/1.png`)" />
    </button>

    <div class="middle">
      <div>
        <p>{{ stay.propertyType }}</p>
        <p class="name">{{ stay.name }}</p>
        <p class="line">_____</p>
        <!-- <div v-for="(item, idx) in stay.items" :key="idx"></div> -->
        <p class="amenities">{{ stay.amenities }}</p>
      </div>
      <div class="card-rating">
        <span><i class="fas fa-star"></i></span>
        <span class="rate"> {{ stay.rateAvg }} </span>
        <span>(</span>

        <span>{{ stay.reviews.legnth }}</span>
        <span>reviews)</span>
      </div>
    </div>

    </div>

    <div class="right">
      <button  @click="like"><i :class="{ 'far':true,'fa-heart':true, changeColor: isLike }" class="far fa-heart"></i></button>
      <div>
        <span class="price">{{ stay.price }}$ </span>/ night
      </div>
    </div>

    <!-- <div class="card-location">{{stay.loc.country}} - {{stay.propertyType}}</div> -->
    <router-link to="/">
      <!-- // TODO: route to reviews page -->
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  data(){
    return {
      isLike:false,
    }
  },
  methods: {
    goToDetails(stayId) {
      this.$router.push(`/stay/${stayId}`);
    },
    like(){
      this.isLike=!this.islike
      console.log(this.isLike);
    }
  },
};
</script>
