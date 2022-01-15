<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="50"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    class="mousewheel-slider"
  >
    <swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide>
  </swiper>
</template>

<style>
.swiper.mousewheel-slider {
  height: 300px !important;
}

.mousewheel-slider .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #000;
  width: 30%;
  margin: 0 0 0 30%;
}

.mousewheel-slider .swiper-pagination-bullets {
  right: 32% !important;
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
import SwiperCore, { Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

SwiperCore.use([Mousewheel, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>