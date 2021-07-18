<template>
  <section class="stay-preview" @click="goToDetails(stay._id)">
    <el-carousel
      class="img-carousell"
      trigger="click"
      height="222px"
      arrow="always"
      :autoplay="false"
      :loop="true"
    >
      <el-carousel-item v-for="(imgUrl, idx) in stay.imgUrls" :key="idx">
        <img :src="imgUrl.url" @click="goToDetails(stay._id)" />
      </el-carousel-item>
    </el-carousel>
    <i
      :class="{ far: true, 'fa-heart': true, changeColor: isLike }"
      class="far fa-heart"
    ></i>

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

      <div>
        <span> {{ stay.guests }} guest</span
        ><span v-if="stay.guests > 1">s</span>
        <span class="sep"> ·</span>
        <span> {{ stay.bedrooms }} bedroom</span
        ><span v-if="stay.bedrooms > 1">s</span>
        <span class="sep"> ·</span>
        <span> {{ stay.beds }} bed</span><span v-if="stay.beds > 1">s</span>
        <span class="sep"> ·</span>
        <span> {{ stay.baths }} bath</span><span v-if="stay.baths > 1">s</span>
      </div>
    </div>
    <span class="price">{{ stay.price }}$ </span>/ night
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
      this.isLike = !this.islike;
      console.log(this.isLike);
    },
  },
};
</script>
