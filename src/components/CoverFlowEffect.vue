<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
  >
    <swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide:nth-child(1n) {
  background-color: palevioletred;
}

.swiper-slide:nth-child(2n) {
  background-color: skyblue;
}

.swiper-slide:nth-child(3n) {
  background-color: peru;
}

.swiper-slide:nth-child(4n) {
  background-color: cadetblue;
}

.swiper-slide:nth-child(5n) {
  background-color: plum;
}

.swiper-slide:nth-child(6n) {
  background-color: goldenrod;
}

.swiper-slide:nth-child(7n) {
  background-color: palegreen;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/pagination/pagination.min.css";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

