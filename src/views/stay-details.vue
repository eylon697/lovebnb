<template>
  <section class="stay-details main-layout">
    <div v-if="stay">
      <pre></pre>
      <details-header :stay="stay" />
      <div class="details-gallery">
        <img v-for="(img, idx) in stay.imgUrls" :key="idx" :src="img.url" />
      </div>
      <div class="main-content">
        <div>
          <div class="info">
            <div>
              <div class="title">
                <span class="property-type">{{ stay.propertyType }}</span>
                hosted by
                {{ stay.host.fullName }}
              </div>
              <div>
                <span> {{ stay.guests }} guest</span>
                <span v-if="stay.guests > 1">s</span>
                <span class="sep"> ·</span>
                <span> {{ stay.bedrooms }} bedroom</span>
                <span v-if="stay.bedrooms > 1">s</span>
                <span class="sep"> ·</span>
                <span> {{ stay.beds }} bed</span
                ><span v-if="stay.beds > 1">s</span>
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

          <!-- TODO:COMPONANTE amenities -->
          <section class="amenities">
            <div class="title-amenities">What this place offers</div>
            <section class="amenities-container">
              <article v-for="(amenity, idx) in stay.amenities" :key="idx">
                <div class="amenities-list">
                  <img :src="require(`@/assets/img/icon/${amenity}.svg`)" />
                  <div class="txt">{{ amenity }}</div>
                </div>
              </article>
            </section>
          </section>

          <div id="reviews" class="reviews-container">
            <div class="rating">
              <i class="fas fa-star"> </i>
              <span class="total-rate"> {{ stay.rateAvg }} </span>
              <span class="sep"> · </span>
              <span>{{ stay.reviews.length }} reviews</span>
            </div>
          </div>

          <el-button v-if="loggedInUser" @click.stop="toggleAddReview"
            >Add Review</el-button
          >
          <add-review
            v-if="addReviewIsOpen"
            @add-review="onAddReview"
            @toggleAddReview="toggleAddReview"
          />

          <review-list :reviews="stay.reviews" />
        </div>
        <stay-order :stay="stay" />
      </div>

      <div id="map" class="map-container" v-if="this.stay.loc.lat">
        <h1 class="map-title">Where you'll be</h1>
        <google-map :loc="stay.loc" v-if="stay.loc" />
        <div v-else>loading...</div>
        <div class="stay-location">{{ stay.loc.address }}</div>
        <p class="stay-nearness">{{ stay.loc.nearness }}</p>
      </div>
    </div>
    <div v-else>Loading</div>

    <!-- TODO:HOST COMPONANTE -->
    <div class="host">
      <div class="header">
        <img :src="stay.host.imgUrl" />
        <img
          if="stay.rateAvg>4.7"
          class="medal"
          :src="require('@/assets/img/icon/medal.svg')"
        />

        <div class="title">Hosted by {{ stay.host.fullName }}</div>
      </div>
      <div if="stay.rateAvg>4.7" class="rate">
        <i class="fas fa-star"></i>
        <div>{{ stay.reviews.length }} reviews</div>
        <div>
          <img
            class="validation"
            :src="require('@/assets/img/icon/validation.svg')"
          />
          Identity verified
        </div>
      </div>

      <div class="content">
        <div v-if="stay.rateAvg > 4.7">
          <div class="super-host">{{ stay.host.fullName }} is a Superhost</div>
          <p>Superhosts are experienced, highly rated hosts who are</p>
          <p>committed to providing great stays for guests.</p>
        </div>
        <div class="Response-rate">Response rate: 100%</div>
        <div class="Response-time">Response time: within a few hours</div>
        <button class="contact">Content host</button>
        <div class="securing">
          <img :src="require('@/assets/img/icon/securing.svg')" />
          <p>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import stayOrder from "@/cmps/stay-order.vue";
// import { showMsg } from "@/services/event-bus.service.js";
import detailsHeader from "@/cmps/details-header.vue";
import GoogleMap from "@/cmps/google-map.vue";
import reviewList from "@/cmps/reviews-list.vue";
import addReview from "@/cmps/add-review.vue";

export default {
  components: { stayOrder, detailsHeader, reviewList, GoogleMap, addReview },
  data() {
    return {
      stayId: this.$route.params.stayId,
      addReviewIsOpen: false,
    };
  },
  computed: {
    stay() {
      return this.$store.getters.stay;
    },
    hostFirstName() {
      return null;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
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
    toggleAddReview() {
      this.addReviewIsOpen = !this.addReviewIsOpen;
    },
  },
  created() {
    console.log("stayId", this.stayId);
    this.loadStay();
  },
};
</script>