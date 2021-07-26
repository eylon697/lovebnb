<template>
  <section class="stay-order">
    <div class="order-header">
      <div class="price">
        <span>${{ stay.price }}</span> /night
      </div>
      <div class="rating">
        <i class="fas fa-star"></i>
        <span class="rate"> {{ stay.rateAvg }} </span>
        <span class="reviews"> ({{ stay.reviews.length }} reviews)</span>
      </div>
    </div>

    <label class="dates">
      <date-picker
        v-model="order.dates"
        range
        ref="datePicker"
        @input="setStatus"
      />
      <div class="check-in">
        <div class="title">Check in</div>
        <div class="value" v-if="order.dates && order.dates.length">
          {{ checkIn }}
        </div>
        <div class="placeholder" v-else>Add date</div>
      </div>
      <div class="sep"></div>
      <div class="check-out">
        <div class="title">Check out</div>
        <div class="value" v-if="order.dates && order.dates.length">
          {{ checkOut }}
        </div>
        <div class="placeholder" v-else>Add date</div>
      </div>
    </label>

    <div class="guests">
      <div>Guests:</div>
      <div class="control">
        <button :class="{ show: order.guests > 1 }" @click="removeGuest">
          <span>-</span>
        </button>
        <span class="guestsCount">{{ order.guests }}</span>
        <button :class="{ show: order.guests < stay.guests }" @click="addGuest">
          <span>+</span>
        </button>
      </div>
    </div>

    <button ref="orderBtn" class="order-btn" @click.stop="placeOrder">
      <vue-loaders-ball-pulse
        v-if="isLoading"
        color="white"
        style="height: 23px; top: -7px"
      />
      <span v-else>
        {{ orderBtnTxt }}
      </span>
    </button>

    <div v-if="order.dates && order.dates.length" class="order-data">
      <div class="charges-data">
        <small>You won't be charged yet</small>
        <div class="charges">
          <div>${{ stay.price }} x {{ days }} nights</div>
          <div>{{ coinFormater.format(nightsPrice) }}</div>
        </div>
        <div class="charges">
          <div>Service fee</div>
          <div>{{ coinFormater.format(servPrice) }}</div>
        </div>
      </div>
      <div class="total">
        <div>Total</div>
        <div>{{ coinFormater.format(totalPrice) }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { orderService } from "../services/order.service.js";
import { utilService } from "../services/util.service.js";
import { showMsg } from "../services/event-bus.service.js";
export default {
  props: { stay: Object },
  components: { DatePicker },
  data() {
    return {
      isLoading: false,
      order: orderService.getEmptyOrder(),
    };
  },
  computed: {
    checkIn() {
      if (!this.order.dates || !this.order.dates.length) return null;
      return utilService.toShortFormat(this.order.dates[0]);
    },
    checkOut() {
      if (!this.order.dates || !this.order.dates.length) return null;
      return utilService.toShortFormat(
        this.order.dates[this.order.dates.length - 1]
      );
    },
    coinFormater() {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    },
    days() {
      return this.order.dates.length;
    },
    nightsPrice() {
      return this.stay.price * this.days;
    },
    servPrice() {
      return this.stay.price / 10;
    },
    totalPrice() {
      return this.servPrice + this.nightsPrice;
    },
    orderBtnTxt() {
      switch (this.order.status) {
        case "available":
          return "Reserve";
        case "unAvailable":
          return "unAvailable";
      }
      return "Check availabilty";
    },
  },
  methods: {
    removeGuest() {
      if (this.order.guests > 1) {
        this.order.guests--;
        this.setStatus("edit");
      }
    },
    addGuest() {
      if (this.order.guests < this.stay.guests) {
        this.order.guests++;
        this.setStatus("edit");
      }
    },
    async checkAvailability() {
      try {
        this.isLoading = true;
        const isAvailable = await orderService.checkAvailability(
          this.order.dates,
          this.stay._id
        );
        this.isLoading = false;
        if (isAvailable) {
          this.setStatus("available");
          showMsg("Your order available!");
        } else {
          this.setStatus("unAvailable");
          showMsg("Not available!");
        }
      } catch (err) {
        this.isLoading = false;
        console.log("failed to check availability", err);
      }
    },
    setStatus(status) {
      if (!status || typeof status !== "string") status = "edit";
      this.order.status = status;
    },
    async placeOrder() {
      if (!this.order.dates || this.order.dates.length < 2)
        return this.$refs.datePicker.focus();
      if (this.order.status === "edit") return this.checkAvailability();
      try {
        if (this.order.status === "unAvailable")
          return new Error("unAvailable");
        this.isLoading = true;
        this.order.servPrice = this.servPrice;
        await this.$store.dispatch({
          type: "saveOrder",
          order: this.order,
        });
        showMsg("Your order sent!");
        this.$emit("noticeTag");
      } catch (err) {
        showMsg("failed to place order");
        this.isLoading = false;
        console.log("failed to place order", err);
      }
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

