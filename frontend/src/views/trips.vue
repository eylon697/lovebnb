<template>
  <section class="trips main-layout">
    <h2>Trips</h2>

    <div class="time">
      <div class="upcoming">Upcoming</div>
      <div>Past</div>
    </div>
    <div class="card-trip">
      <img :src="order.stay.imgUrl" />
      <div class="date">
        <span>{{ checkIn }}</span>
        <span>-</span>
        <span>{{ checkOut }}</span>
      </div>
      <div class="city">{{ order.stay.city }}</div>
      <span class="name">{{ order.stay.name }}</span>
    </div>

    <img :src="require('@/assets/img/icon/trip.svg')" />
    <router-link :to="'/'" class="explore">Explore Lovebnb </router-link>
    <div class="help">
      Can’t find your reservation here? Visit the Help Center.
    </div>
  </section>
</template>
<script>
import { utilService } from "../services/util.service.js";
export default {
  data() {
    return {
      order: {
        _id: "",
        dates: [new Date(), new Date()],
        guests: 2,
        created: "0123456789123",
        status: "pending",
        stay: {
          _id: "",
          name: "Junior King size suite",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626616814/5cac9e7b-8b9f-4e56-8746-3e73ff2bf52e_rnd2ey.jpg",
          city: "manhattan",
        },
        guest: {
          _id: "",
          name: "Erez",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626657189/15_hjtjjt.png",
        },
      },
      orders: [
        {
          _id: "",
          dates: [1626962745962, 1626961435962],
          guests: 2,
          created: "0123456789123",
          status: "pending",
          stay: {
            _id: "",
            name: "Junior King size suite",
            imgUrl: "",
          },
          guest: {
            _id: "",
            name: "Erez",
            imgUrl:
              "https://res.cloudinary.com/lovebnb/image/upload/v1626657189/15_hjtjjt.png",
          },
        },
        {
          _id: "",
          dates: [1626962855962, 1626991535962],
          guests: 3,
          created: "0123456789123",
          status: "confirmed",
          stay: {
            _id: "",
            name: "Junior King size suite",
            imgUrl: "",
          },
          guest: {
            _id: "",
            name: "Moshe",
            imgUrl:
              "https://res.cloudinary.com/lovebnb/image/upload/v1626657189/12_gezunt.png",
          },
        },
        {
          _id: "",
          dates: [1626962535962, 1626968535962],
          guests: 2,
          created: "0123456789123",
          status: "confirmed",
          stay: {
            _id: "",
            name: "Junior King size suite",
            imgUrl: "",
          },
          guest: {
            _id: "",
            name: "Or",
            imgUrl:
              "https://res.cloudinary.com/lovebnb/image/upload/v1626657190/18_x2uexg.png",
          },
        },
        {
          _id: "",
          dates: [1626962565962, 1626968585962],
          guests: 2,
          created: "0123456789123",
          status: "confirmed",
          stay: {
            _id: "",
            name: "Junior King size suite",
            imgUrl: "",
          },
          guest: {
            _id: "",
            name: "Elise",
            imgUrl:
              "https://res.cloudinary.com/lovebnb/image/upload/v1626657189/10_cmf8jg.png",
          },
        },
      ],
    };
  },

  computed: {
    checkIn() {
      return utilService.toShortFormat(this.order.dates[0]);
    },
    checkOut() {
      return utilService.toShortFormat(this.order.dates[1]);
    },
    // dataToShow(){
    // checkIn=utilservice.dataToShow(this.date)
    // }
  },
};
</script>  