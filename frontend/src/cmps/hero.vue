<template>
  <section class="hero full" >
    <!-- :style="{ backgroundImage: changeBg }" -->
    <div class="flexible">
      <p>Not sure where to go? Perfect.</p>
      <button><span>I’m flexible</span></button>
    </div>
     <!-- <div class="bgc-img-contaner" id="cf"> -->
          <!-- <img class="bottom bgc-img" src="@/assets/img/hero/home.png" /> -->
          <!-- <img class="top bgc-img" src="@/assets/img/hero/home1.png" /> -->
        <!-- </div> -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      interval: null,
      imgUrl: 1,
    };
  },

  computed: {

    // option2===============
    // changeBg() {
    //   return `url(~@/assets/img/hero/home${this.imgUrl}.png)`;
    // },

  // option3===========
     getImgSlide(){
      let src=''
      if (this.imgUrl === 1) src= require('@/assets/img/hero/home1.png')
        if (this.imgUrl === 2) src= require('@/assets/img/hero/home.png');
      if (this.imgUrl === 3) src= require('@/assets/img/hero/home3.png');
      return src
    },

  },
  created() {
    this.interval = setInterval(() => {
      this.imgUrl++;
      if (this.imgUrl > 3) this.imgUrl = 1;
    }, 5000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

 

