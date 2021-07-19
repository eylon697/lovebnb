<template>
  <section class="stay-details main-layout">
    <div v-if="stay">
      <pre></pre>
      <details-header :stay="stay" />
      <div class="details-gallery">
        <img v-for="(img, idx) in stay.imgUrls" :key="idx" :src="img.url" />
      </div>
      <div class="info">
        <div>
          <div class="title">
            <span class="property-type">{{ stay.propertyType }}</span> hosted by
            {{ stay.host.fullName }}
          </div>
          <div>
            <span> {{ stay.guests }} guest</span>
            <span v-if="stay.guests > 1">s</span>
            <span class="sep"> ·</span>
            <span> {{ stay.bedrooms }} bedroom</span>
            <span v-if="stay.bedrooms > 1">s</span>
            <span class="sep"> ·</span>
            <span> {{ stay.beds }} bed</span><span v-if="stay.beds > 1">s</span>
            <span class="sep"> ·</span>
            <span> {{ stay.baths }} bath</span>
            <span v-if="stay.baths > 1">s</span>
          </div>
        </div>
        <img :src="stay.host.imgUrl" />
      </div>
      <div class="greats">
        <div class="great" v-for="(great, idx) in stay.greats" :key="idx">
          <div>
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

      <section class="amenities">
        <!-- TODO:ICON IN DATA -->
						<h2>What this place offers</h2>
						<section>
							<article v-for="(amenity, idx) in stay.amenities" :key="idx">
								<!-- <i :class="amenity.icon"></i> -->
								{{ amenity }}
							</article>
						</section>
					</section>

      <div class="reviews-container">
        <div class="rating">
          <i class="fas fa-star"> </i>
          <span class="total-rate"> {{ stay.rateAvg }} </span>
          <span class="sep"> · </span>
          <span>{{ stay.reviews.length }} reviews</span>
        </div>
      </div>
      <review-list :reviews="stay.reviews" />

      <div class="map-container" v-if="this.stay.loc.lat">
        <h1 class="map-title">Where you'll be</h1>
        <google-map :loc="stay.loc" v-if="stay.loc" />
        <div v-else>loading...</div>
        <div class="stay-location">{{ stay.loc.address }}</div>
        <p class="stay-nearness">{{ stay.loc.nearness }}</p>
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
  computed: {
    stay() {
      return this.$store.getters.stay;
    },
    hostFirstName() {
      return null;
    },
  },
  methods: {
    loadStay() {
      this.$store.dispatch({ type: "loadStay", stayId: this.stayId });
    },
    loadFirstName() {
      this.hostFirstName = this.stay.host.fullName.substring(
        0,
        this.stay.host.fullName.indexOf(" ")
      );
    },
  },
  // watch: {
  //   stay: function () {
  //     console.log();
  //     this.loadFirstName();
  //   },
  // },
  created() {
    console.log("stayId", this.stayId);
    this.loadStay();
  },
};
</script>