    <template>
    <section class="list-guest-orders">
    <order-guest-preview
      v-for="(order, idx) in orders"
      :key="idx"
      :order="order"
    />
    </section>
</template>
<script>
import orderGuestPreview from "../cmps/order-guest-preview.vue";
export default {
  components: { orderGuestPreview },
  props: {
    orders: Array,
  },
};
</script>
