<template>
  <section>
    <div class="card">
      <img :src="order.guest.imgUrl" />
      <div class="info">
        <div class="by">Request by: {{ order.guest.name }}</div>
        <div class="expire" v-if="order.status === 'pending'">
          Expires in 12 hours
        </div>
        <!-- TODO:Dynamic TIME -->
        <div class="expire" v-if="order.status === 'confirmed'">Expired</div>
        <div class="order-info">
          <span>{{ order.guests }} guests </span>
          <span>·</span>
          <span>{{ this.order.dates[0] }}</span>
          <span>-</span>
          <span>{{ order.dates[1] }}</span>
          <span>·</span>
          <span class="name">{{ order.stay.name }}</span>
        </div>
      </div>

      <div class="action">
        <div
          class="change"
          @click="changeStatus(order, 'Confirmed')"
          v-if="order.status === 'Pending'"
        >
          <span class="accept">accept / </span>
          <span class="reject">reject </span>
        </div>
        <div class="accepted" v-else>Accepted</div>
      </div>
    </div>
  </section>
</template>

<script>
import { utilService } from "../services/util.service.js";
import { showMsg } from '@/services/event-bus.service.js'

export default {
  props: {
    order: Object,
  },
  data() {
    return {};
  },

  methods: {
    changeStatus(order, newStatus) {
      console.log("change");
      order.status = newStatus;
      showMsg("order status updated");
    },
  },
  computed: {
    checkIn() {
      return utilService.toShortFormat(this.order.dates[0]);
    },
    checkOut() {
      return utilService.toShortFormat(this.order.dates[1]);
    },
     longText(txt) {
      if (txt.length < 10) return txt
      return txt.substring(0, 10) + '...'
    },
  },
};
</script>
