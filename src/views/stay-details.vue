<template>
  <section class="stay-details main-layout">
    <pre>












    </pre>
    <details-header :stay="stay"/>
    <div class="details-gallery">
      <img v-for="(img, idx) in stay.imgUrls" :key="idx" :src="img.url" />
    </div>
  </section>
</template>

<script>
import detailsHeader from "../cmps/details-header.vue";
//  TODO:import stayservice
export default {
  components: { detailsHeader},
  data() {
    return {
      stay: {
        _id: "101",
        name: "Ribeira Charming Duplex",
        imgUrls: [
          {
            url: require("../assets/img/stays/new_york/1/1.png"),
          },
          {
            url: require("../assets/img/stays/new_york/1/2.png"),
          },
          {
            url: require("../assets/img/stays/new_york/1/3.png"),
          },
          {
            url: require("../assets/img/stays/new_york/1/4.png"),
          },
          {
            url: require("../assets/img/stays/new_york/1/4.png"),
          },
        ],
        price: 350.0,
        summary:
          "Fantastic studio apartment with three bedrooms, located in Manhattan",
        propertyType: "House",
        accommodates: 2,
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: { _id: "51399391", fullName: "Davit Pok", imgUrl: "img.jpg" },
        loc: {
          country: "New York",
          countryCode: "NY",
          address: "Manhattan, New York",
          lat: 40.73061,
          lng: -73.935242,
        },
        rateAvg: 4,
        reviews: [
          {
            id: "madeId",
            txt: "Very helpful hosts. Cooked traditional...",
            rate: 4,
            by: {
              _id: "u102",
              fullname: "user2",
              imgUrl: "/img/img2.jpg",
            },
          },
        ],
      },
    };
  },
  created() {
    // TODO:try catch
    // const {stayId}=this.$route.params
    // const stay= stayService.getById(stayId)
    // this.stay = stay
  },
};
</script>