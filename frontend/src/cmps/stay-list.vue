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
    </div>
    <div class="preview-container" v-if="stays">
      <stay-preview v-for="stay in stays" :stay="stay" :key="stay._id" />
    </div>
    <div v-else>Loading</div>
  </section>
</template>

<script>
import { utilService } from "../services/util.service";
import stayPreview from "./stay-preview.vue";
export default {
  props: {
    stays: Array,
  },
  data() {
    return {
      filterBy: JSON.parse(JSON.stringify(this.$route.query)),
    };
  },
  computed: {
    title() {
      return utilService.getTitle(this.filterBy);
    },
  },
  components: {
    stayPreview,
  },
};
</script>
