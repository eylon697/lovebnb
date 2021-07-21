<template>
  <section class="stay-order">
    <section class="order-header">
      <p>
        <span class="price">${{ price }}</span
        >/night
      </p>
      <p>
        <i class="fas fa-star"></i>
        <span>{{ avg }} </span>
        <span> ({{ reviews.length }} reviews)</span>
      </p>
    </section>

    <section class="dates">
      <date-picker v-model="dates" range ref="datePicker" />
      <div class="guests">
        <p>Guests:</p>

        <div class="control">
          <button :class="{ show: guestsCount > 1 }" @click="lowerGuests">
            -
          </button>
          <span class="guestsCount">{{ guestsCount }}</span>
          <button :class="{ show: guestsCount < guests }" @click="addGuests">
            +
          </button>
        </div>
      </div>
    </section>


    
    <button ref="orderBtn" class="order-btn" @click="order">
      <vue-loaders-ball-pulse
        color="white"
        v-if="isLoading"
        style="height: 23px; top: -7px"
      />
      <span v-else>{{ orderBtnTxt }}</span>
    </button>
    <section v-if="dates" class="order-data">
      <div class="charges-data">
        <small>You won't be charged yet</small>
        <div class="charges">
          <!-- <p>${{price}} x {{days}} nights</p> -->
          <p>Order</p>
          <p>{{ computedPrice.order }}</p>
        </div>
        <div class="charges">
          <p>Service fee</p>
          <p>{{ computedPrice.service }}</p>
        </div>
      </div>
      <div class="total">
        <p>Total</p>
        <p>{{ computedPrice.total }}</p>
      </div>
    </section>
  </section>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import {orderService} from '../services/order.service.js'
export default {
  props: { reviews: Array, price: Number, guests: Number },
  components: { DatePicker },
  data() {
    return {
      isLoading: false,
      dates: "",
      guestsCount: 1,
    };
  },
  computed: {
    torip() {
      return orderService.getEmpty();
    },
    avg() {
      const sum = this.reviews.reduce((acc, review) => {
        return acc + review.rate;
      }, 0);
      if (sum === 0) return 0;
      return (sum / this.reviews.length).toFixed(1);
    },
    orderBtnTxt() {
      return this.dates ? "Reserve" : "Check availabilty";
    },
    computedPrice() {
      var checkin = this.dates[0].getTime();
      var checkout = this.dates[1].getTime();
      var days = (checkout - checkin) / 1000 / 60 / 60 / 24;
      var order = this.price * days;
      var service = this.price / 10;
      var total = order + service;
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return {
        order: formatter.format(order),
        service: formatter.format(service),
        total: formatter.format(total),
      };
    },
  },
  methods: {
    lowerGuests() {
      if (this.guestsCount > 1) {
        this.guestsCount--;
      }
    },
    addGuests() {
      if (this.guestsCount < this.guests) {
        this.guestsCount++;
      }
    },
    order() {
      if (!this.dates) {
        this.$refs.datePicker.focus();
        return;
      }
      this.$emit("order", {
        dates: this.dates,
        guests: this.guestsCount,
        total: this.computedPrice.total,
      });
      this.isLoading = true;
      this.$refs.orderBtn.disabled = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      setTimeout(() => {
        this.$refs.orderBtn.disabled = false;
      }, 10000);
    },
  },


  mounted() {
    this.$refs.orderBtn.onmousemove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  },
};
</script>

