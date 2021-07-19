<template>
  <section class="stay-preview" @click="goToDetails(stay._id)">
    <el-carousel
      class="img-carousell"
      trigger="click"
      height="210px"
      arrow="always"
      :autoplay="false"
      :loop="true"
    >
      <el-carousel-item v-for="(imgUrl, idx) in stay.imgUrls" :key="idx">
        <img :src="imgUrl.url" @click="goToDetails(stay._id)" />
      </el-carousel-item>
    </el-carousel>

    <div class="heart" @click.stop="like">
       <i v-if="isLike" class="fas fa-heart"></i>
      <!-- <img class="like" v-if="isLike" :src="require('@/assets/img/stay-details/heart2.svg')" /> -->
      <img  v-else :src="require('@/assets/img/stay-details/heart.svg')" />
    </div>


    <div class="info">
      <div class="card-rating">
        <span><i class="fas fa-star"></i></span>
        <span class="rate"> {{ stay.rateAvg }} </span>
        <span>(</span>

        <span>{{ stay.reviews.legnth }}</span>
        <span>reviews)</span>
      </div>

      <div>
        <p>{{ stay.propertyType }}</p>
      </div>
      <div>
        <p class="name">{{ stay.name }}</p>
      </div>
    </div>

    <div class="price">
      <span>${{ stay.price }} </span>
      <span> / night</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  data() {
    return {
      isLike: false,
    };
  },
  methods: {
    goToDetails(stayId) {
      this.$router.push(`/stay/${stayId}`);
    },
    like() {
      this.isLike = !this.isLike;
      console.log(this.isLike);
    },
  },
};
</script>
