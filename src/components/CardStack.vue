
<template>
  <swiper :effect="'cards'" :grabCursor="true">
    <swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";
import SwiperCore, { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-cards/effect-cards.min.css";

SwiperCore.use([EffectCards]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #000;
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