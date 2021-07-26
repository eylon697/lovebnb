<template>
  <!--******** Profile Host********** -->
  <!-- TODO:Check if the user is a host => if (stay.host && stay.host.stays && stay.host.stays.length) -->

  <section class="profile main-layout" v-if="loggedInUser">
    <div v-if="loggedInUser.stays && loggedInUser.stays.length">
      <div
        v-if="loggedInUser.hostOrders && loggedInUser.hostOrders.length"
        class="deshboard"
      >
        <div class="title">Pending / Accepted</div>
        <div class="small">
          <span>{{ loggedInUser.hostOrders.length }} new items </span>
          <!-- <span> ·</span> -->
          <!-- <span>75% response rate</span> -->
          <!-- TODO:dinamic response -->
        </div>
        <div class="orders-container">
          <list-orders v-if="loggedInUser.hostOrders" :orders="loggedInUser.hostOrders" />

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
      <div v-else>No orders</div>
    </div>
    <div v-else>
      <router-link to="/">Become a Host</router-link>
    </div>
  </section>
</template>
<script>
import listOrders from "../cmps/list-orders.vue";
export default {
  components: { listOrders },
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