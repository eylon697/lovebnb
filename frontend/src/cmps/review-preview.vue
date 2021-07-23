
<template>
  <section class="review-preview">
    <section class="details">
      <img :src="review.by.imgUrl" />
      <div>
        <h1>{{ review.by.fullname }}</h1>
        <div>{{ formatDate }}</div>
      </div>
    </section>
    <p>{{ review.txt }}</p>
  </section>
</template>

<script>
import { utilService } from "@/services/util.service.js";
export default {
  props: {
    review: Object,
  },
  computed: {
    formatDate() {
      return utilService.getformatDate(this.review.at);
    },
  },
};
</script>
