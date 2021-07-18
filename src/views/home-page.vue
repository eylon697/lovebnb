<template>
  <div class="home-page main-layout">
    <hero></hero>
    <explore-list :list="{ headline: 'Live anywhere', items: categories }" />
    <explore-list
      :list="{ headline: 'Inspiration destinations', items: cities }"
    />

    <div class="explore-nature">
      <router-link class="router" to="/">
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
          No matter what kind of home or room you want to share, Lovebnb makes
          it simple and secure to host travelers.
        </p>
        <p>
          You’re in full control of your availability, prices, house rules, and
          how you interact with guests.
        </p>

        <p></p>
        <button>Join now</button>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "../cmps/hero.vue";
import exploreList from "../cmps/explore-list.vue";

export default {
  name: "homePage",
  data() {
    return {
      nearStay: [
        {
          title: "Tel Aviv",
          imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605741/sky1_tpnuc1.png',
          time: "20 minute drive",
        },
        {
          title: "Jerusalem",
          imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605741/sky3_aqyfl1.png',
          time: "1 hour drive",
        },
        {
          title: "Eilat",
          imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605741/sky2_owvvtf.png',
          time: "5 hour drive",
        },
        {
          title: "Natanya",
          imgUrl: 'https://res.cloudinary.com/lovebnb/image/upload/v1626605742/sky4_edkkdp.png',
          time: "30 minute drive",
        },
      ],
      cities: [
        //list
        {
          title: "New York",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605743/1_xu7vkb.png",
        }, //item
        {
          title: "Tel Aviv",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605743/2_f22ew1.png",
        },
        {
          title: "Paris",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605743/3_tglg7t.png",
        },
        {
          title: "Amsterdam",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605744/4_k5iuuu.png",
        },
      ],
      categories: [
        {
          title: "Pets allowed",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605743/dog_dzplfv.png",
        },
        {
          title: "Entire home",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605743/entire_ifxdjz.png",
        },
        {
          title: "Uniqua stays",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605742/unique_zkoaaw.png",
        },
        {
          title: "Outdoor getaways",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605741/outdoor_c9jujb.png",
        },
      ],
    };
  },
  //TODO: EVENT BUS
  methods: {
    setHeaderFixedStyle(val) {
      this.$emit("setHeaderFixedStyle", val);
    },
  },
  created() {
    // window.addEventListener("scroll");//TODO:FUNCTION

    this.setHeaderFixedStyle(true);
  },
  destroyedss() {
    //  window.removeEventListener("scroll");//TODO:FUNCTION
    this.setHeaderFixedStyle(false);
  },
  // methods:{
  // TODO:FUNCTION SCROLL EVENT
  // let scrollDiff = event.path[1].scrollY;
  //   if (scrollDiff >= 1) {
  //     this. = true;
  //     this.$emit("", true);
  //   } else if (scrollDiff < 1) {
  //     this. = false;
  //     this.$emit("", false);
  //   }

  // },

  components: {
    Hero,
    exploreList,
  },
};
</script>

}
