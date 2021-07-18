
<template>
  <section class="review-preview">
    <section class="user">
      <img src="@/assets/img/user/1.png" />
      <div>
        <h1>{{ review.by.fullname }}</h1>
        <p>{{ review.at }}</p>
      </div>
    </section>
    <p>{{ review.txt }}</p>
  </section>
</template>

<script>
export default {
  props: {
    review: Object,
  },
  computed: {
    // time() {
    // //   month = this.review.at.getMonth();
    // //   console.log(month);
    // //   year = this.review.atgetFullYear();
    // //   console.log(year);
    // },
  },
};
</script>
