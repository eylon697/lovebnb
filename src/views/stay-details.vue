<template>
  <section class="stay-details main-layout">
    <div v-if="stay">
      <pre></pre>
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

      <div class="reviews-container">
        <div class="rating">
          <i class="fas fa-star"></i>
          <p class="total-rate">{{ stay.rateAvg }}</p>
          <span class="sep"> ·</span>
          <p>{{ stay.reviews.length }} reviews</p>
        </div>
        <review-list :reviews="stay.reviews" :stay="stay" />
      </div>

      <div class="map-container" v-if="this.stay.loc.lat">
        <h1 class="map-title">Where you'll be</h1>
        <google-map :loc="stay.loc" v-if="stay.loc" />
        <div v-else>loading...</div>
        <div class="stay-location">{{ stay.loc.address }}</div>
      </div>
    </div>
    <div v-else>Loading</div>
  </section>
</template>

<script>
import detailsHeader from "../cmps/details-header.vue";
import GoogleMap from "../cmps/google-map.vue";
import reviewList from "../cmps/reviews-list.vue";
export default {
  components: { detailsHeader, reviewList, GoogleMap },
  data() {
    return {
      stayId: this.$route.params.stayId,
    };
  },
  methods: {
    loadStay() {
      this.$store.dispatch({ type: "loadStay", stayId: this.stayId });
    },
  },
  computed: {
    stay() {
      return this.$store.getters.stay;
    },
    hostFirstName() {
      return this.stay.host.fullName.substring(
        0,
        this.stay.host.fullName.indexOf(" ")
      );
    },
  },
  created() {
    console.log("stayId", this.stayId);
    this.loadStay();
  },
};
</script>