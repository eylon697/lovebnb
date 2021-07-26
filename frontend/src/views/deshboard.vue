<template>
  <!--******** Profile Host********** -->
  <!-- TODO:Check if the user is a host => if (stay.host && stay.host.stays && stay.host.stays.length) -->

  <section class="profile main-layout" v-if="loggedInUser">
    <div v-if="!loggedInUser.hostOrder">
      <router-link to="/">Become a Host</router-link>
    </div>
    <div  v-if="loggedInUser.hostOrder && !loggedInUser.hostOrder">
      No orders
    </div>
    <div class="deshboard" v-if="loggedInUser.hostOrder && loggedInUser.hostOrder.length" >
      <div class="title">Pending / Accepted</div>
      <div class="small">
        <span>{{ orders.length }} new items </span>
        <!-- <span> ·</span> -->
        <!-- <span>75% response rate</span> -->
        <!-- TODO:dinamic response -->
      </div>
      <div class="orders-container">
        <list-orders v-if="orders" :orders="loggedInUser.hostOrder" />

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
              <span class="num">25</span>
            </div>
            <div class="svg-container">
              <img :src="require('@/assets/img/icon/trip.svg')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import listOrders from "../cmps/list-orders.vue";
export default {
  components: { listOrders },
  data() {
    return {
      orders: [
        {
          _id: "o1",
          dates: [new Date(), new Date()],
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
          dates: [new Date(), new Date()],
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
          dates: [new Date(), new Date()],
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
          dates: [new Date(), new Date()],
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
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  created() {
    // await this.$store.dispatch({ type: 'loadHostOrders' })
    // if (!loggedInUser) this.$router.push("/");
  },
};
</script>  