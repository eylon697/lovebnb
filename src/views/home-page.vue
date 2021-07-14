<template>
  <div class="home-page">
    <hero></hero>
    <explore-list :list="{ headline: 'Categories', items: categories }" />
    <explore-list :list="{ headline: 'Cities', items: cities }" />
    <div class="explore-nature">
     <img :src="require('@/assets/img/home-page/nature.png')" />
    </div>
  </div>

</template>

<script>
import Hero from "../cmps/hero.vue";
import exploreList from "../cmps/explore-list.vue";

export default {
  data() {
    return {
      cities: [
        //list
        { title: "New York", imgUrl: require("../assets/img/home-page/1.png") }, //item
        { title: "Tel-Aviv", imgUrl: require("../assets/img/home-page/2.png") },
        { title: "Paris", imgUrl: require("../assets/img/home-page/3.png") },
        {title: "Amsterdam", imgUrl: require("../assets/img/home-page/4.png"),
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
  components: {
    Hero,
    exploreList,
  },
};
</script>

}
