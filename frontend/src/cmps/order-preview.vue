<template>
  <section class="order-preview">
    <div class="card">
      <div class="left">
        <div class="user-img">
          <img :src="order.guest.imgUrl" />
        </div>
        <div class="info">
          <div class="by">Request by {{ order.guest.fullName }}</div>
          <div class="expire" v-if="order.status === 'pending'">
            Expires in 12 hours
          </div>
          <!-- TODO:Dynamic TIME -->
          <div class="expire" v-if="order.status === 'confirmed'">Expired</div>
          <div class="order-info">
            <span class="name">{{ order.stay.name }}</span>
            <span> · </span>
            <span>{{ checkIn }}</span>
            <span>-</span>
            <span>{{ checkOut }}</span>
            <span> · </span>
            <span>{{ order.guests }} guests </span>
          </div>
        </div>
      </div>

      <div class="action">
        <div class="change" v-if="order.status === 'Pending'">
          <span @click="changeStatus(order, 'Confirmed')" class="accept"
            >Accept
          </span>
          <span>/ </span>
          <span @click="changeStatus(order, 'Reject')" class="reject"
            >Reject
          </span>
        </div>
        <div class="reject" v-if="order.status === 'Reject'">Reject</div>
        <div class="accepted" v-if="order.status === 'Confirmed'">Accepted</div>
      </div>
    </div>
  </section>
</template>

<script>
import { utilService } from "../services/util.service.js";
import { showMsg } from "@/services/event-bus.service.js";

export default {
  props: {
    order: Object,
  },
  data() {
    return {};
  },

  methods: {
    changeStatus(order, newStatus) {
      console.log("order-preview", newStatus);
      order.status = newStatus;
      showMsg("order status updated");
    },
  },
  computed: {
    checkIn() {
      return utilService.toShortFormat(new Date(this.order.dates[0]));
    },
    checkOut() {
      return utilService.toShortFormat(new Date(this.order.dates[this.order.dates.length-1]));
    },
    longText(txt) {
      if (txt.length < 10) return txt;
      return txt.substring(0, 10) + "...";
    },
  },
};
</script>
