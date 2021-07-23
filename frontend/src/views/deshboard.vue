<template>
  <!--******** Profile Host********** -->
  <!-- TODO:Check if the user is a host => if (stay.host && stay.host.stays && stay.host.stays.length) -->

  <section class="profile main-layout">
    <div class="head">
      <div class="title">Pending / Accepted</div>
      <div class="small">
        <span>{{ orders.length }} new items </span>
        <!-- <span> ·</span> -->
        <!-- <span>75% response rate</span> -->
        <!-- TODO:dinamic response -->
      </div>
      <div class="orders-container">
        <list-orders v-if="orders" :orders="orders" />

        <div class="summary">
          <div class="header">
            <div class="txt">
              <div class="title">Hosting summary</div>
              <div class="fantastic">Fantastic job!</div>
              <p>Guests love what you're doing.</p>
              <p class="great">keep up the great work!</p>
              <div class="details">View details</div>
            </div>

            <div class="v">
              <i class="fas fa-check-circle"></i>
            </div>
          </div>

          <div class="middle">
            <div class="revenue">
              <div>July Revenue</div>
              <div class="num">2650$</div>
            </div>
            <div class="days">
              <div>30-day-views</div>
              <div class="num">482</div>
            </div>
          </div>

          <div class="buttom">
            <div class="reating">
              <div>overAll reting</div>
              <span class="num">4.9 <i class="fas fa-star"></i></span>
            </div>
            <div class="reviews">
              <div>Total reviews</div>
              <span  class="num">25</span>
            </div>
            <i class="fab fa-airbnb"></i>
          </div>
        </div>
      </div>
    </div>
    <bar-chart class="chart" />

    <!--Profil USER -->
  </section>
</template>
<script>
import barChart from "../cmps/bar-chart.vue";
import listOrders from "../cmps/list-orders.vue";
// import {utilservice} from '../services/util.service.js'
export default {
  components: { barChart, listOrders },
  data() {
    return {
      orders: [
        {
          _id: "o1",
          dates: [1626962745962, 1626961435962],
          guests: 2,
          created: "0123456789123",
          status: "Pending",
          stay: {
            _id: "s1",
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
          _id: "o2",
          dates: [1626962855962, 1626991535962],
          guests: 3,
          created: "0123456789123",
          status: "Confirmed",
          stay: {
            _id: "s1",
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
          _id: "o3",
          dates: [1626962535962, 1626968535962],
          guests: 2,
          created: "0123456789123",
          status: "Confirmed",
          stay: {
            _id: "s1",
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
          _id: "o4",
          dates: [1626962565962, 1626968585962],
          guests: 2,
          created: "0123456789123",
          status: "Confirmed",
          stay: {
            _id: "s1",
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
};
</script>  