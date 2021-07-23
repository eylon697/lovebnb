<template>
  <section>
    <div class="list-orders">
     
      <order-preview v-for="(order, idx) in orders" :key="idx" :order="order" />
    </div>
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
