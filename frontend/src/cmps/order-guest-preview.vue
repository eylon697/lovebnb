<template>
  <section class="order-guest-preview">
    <div class="card-trip">
      <img :src="order.stay.imgUrl" />
      <div class="date">
        <span>{{ checkIn }}</span>
        <span>-</span>
        <span>{{ checkOut }}</span>
        <div class="city">{{ order.stay.city }}</div>
        <span class="name">{{ order.stay.name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import {utilService} from '../services/util.service.js'
export default {
  props: { order: Object },
  computed: {
    checkIn() {
      return utilService.toShortFormat(new Date(this.order.dates[0]));
    },
    checkOut() {
      return utilService.toShortFormat(new Date(this.order.dates[this.order.dates.length-1]));
    },
  }
};
</script>
