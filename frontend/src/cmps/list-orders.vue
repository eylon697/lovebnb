<template>
  <section class="list-container">
    <order-preview v-for="(order, idx) in orders" :key="idx" :order="order" />
  </section>
</template>

<script>
import orderPreview from "../cmps/order-preview.vue";
export default {
  props: {
    orders: Array,
  },
  components: { orderPreview },
};
</script>
