<template>
  <section class="stay-details">
    <pre>
        /
        /
        /
        /
        /
        /
        /
        /
        /
    </pre>
    <div class="details-header">
      <div class="title">
        <span>{{ stay.name }}</span>
      </div>
      <div class="bottom">
        <div class="left">
          <i class="fas fa-star"></i>
          <span> {{ stay.rateAvg }} </span>
          <span>(</span>
          <router-link :to="'/stay/' + stay._id + '/reviews'">
            <span>{{ stay.reviews.length }} </span>
            <span>reviews</span>
          </router-link>
          <span>)</span>
          <span> &#8226; </span>
          <router-link to="/">{{ stay.loc.address }}</router-link>
        </div>
        <div class="right">
          <div class="share">
            <i class="fas fa-share"></i>
            <span>Share</span>
          </div>
          <div class="save">
            <i class="far fa-heart"></i>
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
    <div class="details-gallery">
      <img :src="stay.imgUrls.main" />
      <div>
        <div>
          <img :src="stay.imgUrls.topL" />
          <img :src="stay.imgUrls.topR" />
        </div>
        <div>
          <img :src="stay.imgUrls.btmL" />
          <img :src="stay.imgUrls.btmR" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//  TODO:import stayservice
export default {
  data() {
    return {
      stay: {
        _id: "101",
        name: "Ribeira Charming Duplex",
        imgUrls: {
          main: require("../assets/img/stays/new_york/1/1.png"),
          topL: require("../assets/img/stays/new_york/1/2.png"),
          topR: require("../assets/img/stays/new_york/1/3.png"),
          btmL: require("../assets/img/stays/new_york/1/4.png"),
          btmR: require("../assets/img/stays/new_york/1/4.png"),
        },
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