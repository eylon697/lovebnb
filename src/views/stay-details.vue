<template>
  <section class="stay-details main-layout">
    <details-header :stay="stay" />
    <div class="details-gallery">
      <img v-for="(img, idx) in stay.imgUrls" :key="idx" :src="img.url" />
    </div>
    <div class="entire">
      <div>
        <div class="title">
          Entire
          <span class="property-type">{{ stay.propertyType }}</span> hosted by
          {{ hostFirstName }}
        </div>
        <div>
          <span> {{ stay.guests }} guest</span
          ><span v-if="stay.guests > 1">s</span>
          <span class="sep"> ·</span>
          <span> {{ stay.bedrooms }} bedroom</span
          ><span v-if="stay.bedrooms > 1">s</span>
          <span class="sep"> ·</span>
          <span> {{ stay.beds }} bed</span><span v-if="stay.beds > 1">s</span>
          <span class="sep"> ·</span>
          <span> {{ stay.baths }} bath</span
          ><span v-if="stay.baths > 1">s</span>
        </div>
      </div>
      <img :src="stay.host.imgUrl" />
    </div>
    <div class="greats">
      <div class="great" v-for="(great, idx) in stay.greats" :key="idx">
        <div>
          <!-- {{great.icon}} -->
          <span class="material-icons-outlined"> gpp_good </span>
        </div>
        <div>
          <div class="title">{{ great.title }}</div>
          <div class="txt">{{ great.txt }}</div>
        </div>
      </div>
      <div></div>
    </div>
    <div></div>
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
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 1,
        amenities: ["TV", "Wifi", "Kitchen", "Pets allowed", "Cookingbasics"],
        host: {
          _id: "51399391",
          fullName: "Davit Pok",
          imgUrl: require("@/assets/img/app-header/user.png"),
        },
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
  computed: {
    hostFirstName() {
      return this.stay.host.fullName.substring(
        0,
        this.stay.host.fullName.indexOf(" ")
      );
    },
  },
  created() {
    // TODO:try catch
    // const {stayId}=this.$route.params
    // const stay= stayService.getById(stayId)
    // this.stay = stay
  },
};
</script>