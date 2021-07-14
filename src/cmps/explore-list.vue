<template>
  <section class="explore-list">
    <h5 class="headeline">{{ list.headline }}</h5>
    <div class="items-container">
      <div v-for="(item, idx) in list.items" :key="idx">
        <div clas="card-explore">
          <router-link to="/"> <img :src="item.imgUrl" /></router-link>
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    list: Object,
  },
};
</script>
