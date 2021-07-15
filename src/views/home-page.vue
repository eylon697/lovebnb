<template>
  <div class="home-page main-layout">
    <hero></hero>
    <!-- <explore-list :list="{ headline: 'Explore nearby', items: nearStay }" /> -->
    <explore-list :list="{ headline: 'Live anywhere', items: categories }" />
    <explore-list
      :list="{ headline: 'Inspiration destinations', items: cities }"
    />

    <!-- <img class="outdoors" :src="require('@/assets/img/home-page/outdoors.png')"/> -->
    <div class="explore-nature">
      <router-link class="router" to="/">
        <!-- <img :src="require('@/assets/img/home-page/nature.png')" /> -->
        <div class="info">
          <h1>The Greatest</h1>
          <h1>Outdoors</h1>
          <p>Wishlists curated By Homebnb</p>
          <button>Get inspired</button>
        </div>
      </router-link>
    </div>

    <section class="join-host main-layout">
      <div>
        <h2>Join our hosts</h2>
        <p>
          No matter what kind of home or room you want to share, Lovebnb makes it
          simple and secure to host travelers. 
        </p>
        <p>You’re in full control of your
          availability, prices, house rules, and how you interact with guests.</p>
        <!-- <p>
          There's no cost to sign up. MiCasa generally charges hosts a flat 3%
          per reservation, among the lowest fees in the industry.
        </p>
        <p>
          We have your back to keep you, your home, and your belongings safe. We
          cover every booking with $ 1M USD in property damage protection and
          another $ 1M USD in insurance against accidents.
        </p> -->
        <p></p>
        <button>Join now</button>
      </div>
      <!-- <div class="imgs">
        <img class="img1" :src="require('@/assets/img/app-header/user.png')" />
        <img class="img2" :src="require('@/assets/img/app-header/user.png')" />
        <img class="img3" :src="require('@/assets/img/app-header/user.png')" />
      </div> -->
      <!-- </div> -->
    </section>
  </div>
</template>

<script>
import Hero from "../cmps/hero.vue";
import exploreList from "../cmps/explore-list.vue";

export default {
  data() {
    return {
      nearStay: [
        {
          title: "Tel-Aviv",
          imgUrl: require("../assets/img/home-page/sky1.png"),
          time: "20 minute drive",
        },
        {
          title: "Jerusalem",
          imgUrl: require("../assets/img/home-page/sky2.png"),
          time: "1 hour drive",
        },
        {
          title: "Eilat",
          imgUrl: require("../assets/img/home-page/sky3.png"),
          time: "5 hour drive",
        },
        {
          title: "Natanya",
          imgUrl: require("../assets/img/home-page/sky4.png"),
          time: "30 minute drive",
        },
      ],
      cities: [
        //list
        { title: "New York", imgUrl: require("../assets/img/home-page/1.png") }, //item
        { title: "Tel-Aviv", imgUrl: require("../assets/img/home-page/2.png") },
        { title: "Paris", imgUrl: require("../assets/img/home-page/3.png") },
        {
          title: "Amsterdam",
          imgUrl: require("../assets/img/home-page/4.png"),
        },
      ],
      categories: [
        {
          title: "Pets allowed",
          imgUrl: require("../assets/img/home-page/dog.png"),
        },
        {
          title: "Entire home",
          imgUrl: require("../assets/img/home-page/entire.png"),
        },
        {
          title: "Uniqua stays",
          imgUrl: require("../assets/img/home-page/unique.png"),
        },
        {
          title: "Outdoor getaways",
          imgUrl: require("../assets/img/home-page/outdoor.png"),
        },
      ],
    };
  },
  methods: {
    //TODO: EVENT BUS
    methods: {
      setHeaderFixedStyle(val) {
        this.$emit("setHeaderFixedStyle", val);
      },
    },
  },
  created() {
    this.setHeaderFixedStyle(true);
  },
  destroyedss() {
    this.setHeaderFixedStyle(false);
  },
  components: {
    Hero,
    exploreList,
  },
};
</script>

}
