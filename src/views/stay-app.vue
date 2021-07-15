<template>
  <section class="stat-app">
    <stay-list :stays="stays" v-if="stays" />
  </section>
</template>
<script>
import stayList from '@/cmps/stay-list.vue'
export default {
  data() {
    return {
      // stays: [
      //   {
      //     _id: "101",
      //     name: "Ribeira Charming Duplex",
      //     imgUrls: [
      //       "../assets/img/stays/new_york/1/1.png",
      //       "../assets/img/stays/new_york/1/2.png",
      //       "../assets/img/stays/new_york/1/3.png",
      //       "../assets/img/stays/new_york/1/4.png",
      //     ],
      //     price: 350.0,
      //     summary:
      //       "Fantastic studio apartment with three bedrooms, located in Manhattan",
      //     propertyType: "House",
      //     accommodates: 2,
      //     amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
      //     host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
      //     loc: {
      //       country: "New York",
      //       countryCode: "NY",
      //       address: "Manhattan, New York",
      //       lat: 40.73061,
      //       lng: -73.935242,
      //     },
      //     reviews: [
      //       {
      //         id: "madeId",
      //         txt: "Very helpful hosts. Cooked traditional...",
      //         rate: 4,
      //         by: {
      //           _id: "u102",
      //           fullname: "user2",
      //           imgUrl: "/img/img2.jpg",
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     _id: "101",
      //     name: "Ribeira Charming Duplex",
      //     imgUrls: [
      //       "../assets/img/stays/new_york/1/1.png",
      //       "../assets/img/stays/new_york/1/2.png",
      //       "../assets/img/stays/new_york/1/3.png",
      //       "../assets/img/stays/new_york/1/4.png",
      //     ],
      //     price: 350.0,
      //     summary:
      //       "Fantastic studio apartment with three bedrooms, located in Manhattan",
      //     propertyType: "House",
      //     accommodates: 2,
      //     amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
      //     host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
      //     loc: {
      //       country: "New York",
      //       countryCode: "NY",
      //       address: "Manhattan, New York",
      //       lat: 40.73061,
      //       lng: -73.935242,
      //     },
      //     reviews: [
      //       {
      //         id: "madeId",
      //         txt: "Very helpful hosts. Cooked traditional...",
      //         rate: 4,
      //         by: {
      //           _id: "u102",
      //           fullname: "user2",
      //           imgUrl: "/img/img2.jpg",
      //         },
      //       },
      //     ],
      //   },
      // ],
    };
  },
  components: {
    stayList,
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
    
  },
};
</script>
