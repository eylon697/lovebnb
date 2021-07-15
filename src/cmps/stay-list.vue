<template>
  <section class="stay-list" v-if="stays">
    <div class="list-header">
      <p>{{ stays.length }}+ stays</p>
      <h2>Stays in new York</h2>
      TODO:Dynamic title
      <!-- <h2>Stays in {{stays.loc.country}}</h2>  -->
      <div class="filter">
        <button>Type of place</button>
        <button>Price</button>
        <button>Instant Book</button>
        <button>Rooms and beds</button>
        <button>Mora filter</button>
      </div>
      <p>Review COVID-19 travel restrictions before you book.Learn more</p>
      TODO:LINK TO INFORMATION WEBSITE
    </div>
    <!-- <pre>{{stays}}</pre> -->
    <section
      v-for="stay in stays"
      :key="stay._id"
      class="stay-preveiw-container"
    >
      <stay-preview :stay="stay"> </stay-preview>
    </section>
  </section>
</template>

<script>
import stayPreview from './stay-preview.vue'
export default {
  props: {
    stays: Array,
  },
//   name:stayList,
  data(){
      return{
        filterBy:''
      }
  },
    components: {
    stayPreview,
  },
};
</script>
