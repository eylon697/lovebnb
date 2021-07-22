<template>
  <div class="details-header">
    <div v-if="stay" class="title">
     {{ stay.name }}
    </div>
    <div class="bottom">
      <div class="left">
        <i class="fas fa-star"></i>
        <span class="rate"> {{ stay.rateAvg }} </span>
        <span>(</span>
        <a href="#reviews">
          <span>{{ stay.reviews.length }} </span>
          <span>reviews</span>
        </a>
        <span>)</span>
        <span> &#8226; </span>
        <a href="#map">{{ stay.loc.address }}</a>
      </div>
      <!-- <div class="right">
        <div class="share">
          <i class="fas fa-share"></i>
          <span>Share</span>
        </div> -->
        <!-- <div class="save">
          <i class="far fa-heart"></i>
          <span>Save</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: { stay: Object },
};
</script>