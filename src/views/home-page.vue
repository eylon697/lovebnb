<template>
  <div class="home-page main-layout">
    <hero></hero>

    <explore-list
      :list="{ headline: 'Inspiration destinations', items: cities }"
    />
    <div class="explore-nature">
      <div class="router" @click="goToOutDoor">
        <div class="info">
          <h1>The Greatest</h1>
          <h1>Outdoors</h1>
          <p>Wishlists curated By Homebnb</p>
          <button>Get inspired</button>
        </div>
      </div>
    </div>
    <explore-list :list="{ headline: 'Live anywhere', items: categories }" />

    <section class="join-host main-layout full">
      <div>
        <h2>Join our hosts</h2>
        <p>No matter what kind of home or room you want to share,</p>
        <p>Lovebnb makes it simple and secure to host travelers.</p>

        <button>Join now</button>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "../cmps/hero.vue";
import exploreList from "../cmps/explore-list.vue";
import { eventBus } from "../services/event-bus.service.js";
import { utilService } from "../services/util.service.js";
export default {
  name: "homePage",
  data() {
    return {
      cities: [
        {
          title: "Manhattan",
          imgUrl:
            "https://res.cloudinary.com/lovebnb/image/upload/v1626605743/1_xu7vkb.png",
        },
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
    openHeader() {
      eventBus.$emit("openHeader");
    },
    onScroll(ev) {
      let scrollDiff = ev.path[1].scrollY;
      if (scrollDiff === 0) {
        this.openHeader();
      }
    },
    goToOutDoor() {
      this.filterBy.mainFilter = "propertyType";
      this.filterBy.propertyType = "Outdoor getaways";
      const filterUrl = utilService.objToUrl(this.filterBy);
      this.$router.push(`/stay?${filterUrl}`);
    },
  },

  computed: {
    filterBy() {
      return this.$store.getters.filterBy;
    },
  },
  mounted() {
    this.openHeader();
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  components: {
    Hero,
    exploreList,
  },
};
</script>


 
