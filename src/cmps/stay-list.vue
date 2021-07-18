<template>
  <section class="stay-list" v-if="stays">
    <div class="list-header">
      <div>{{ stays.length }} stays</div>
      <h1>{{ title }}</h1>
      <div>
        Review COVID-19 travel restrictions before you book.
        <a
          class="covid"
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?adgroupsurvey={adgroupsurvey}&gclid=Cj0KCQjwub-HBhCyARIsAPctr7z1TnG-g4qSH8XfjvPoEXP_vNxL7VJMoZ4pSBcZudXisHg3-9sJXRwaArCAEALw_wcB"
        >
          <span> Learn more </span>
        </a>
      </div>
      <!-- TODO:LINK TO INFORMATION WEBSITE -->
    </div>
    <div v-if="stays">
      <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id" />
    </div>
    <div v-else>Loading</div>
  </section>
</template>

<script>
import stayPreview from "./stay-preview.vue";
export default {
  props: { stays: Array },
  data() {
    return {
      filterBy: JSON.parse(JSON.stringify(this.$route.query)),
    };
  },
  computed: {
    title() {
      switch (this.filterBy.mainFilter) {
        case "country":
          return "Stays in " + this.filterBy.country;
        case "propertyType":
          return this.filterBy.propertyType + "s";
        case "guests":
          return "Stays to " + this.filterBy.guests + " guests";
        case "checkIn":
          return "checkIn " + this.filterBy.checkIn;

        default:
          return "Stays results";
      }
    },
  },
  components: {
    stayPreview,
  },
}
</script>
