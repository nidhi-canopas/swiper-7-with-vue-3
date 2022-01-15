<template>
  <div class="swiper-pagination"></div>
  <swiper
    :slides-per-view="1"
    :pagination="pagination"
    class="pagination-slider"
  >
    <swiper-slide v-for="n in 7" :key="n"> {{ n }} </swiper-slide>
  </swiper>
</template>

<style>
.pagination-slider .swiper-slide {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  width: 40% !important;
  margin: 0 30%;
  font-size: 24px;
  font-weight: 700;
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

.pagination-slider .swiper-pagination-bullet {
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
  width: 40px !important;
  height: 40px !important;
}

.pagination-slider .swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}

.pagination-slider .swiper-pagination {
  position: unset;
  margin-bottom: 3%;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";
import SwiperCore, { Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
SwiperCore.use([Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          console.log(index, className);
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    };
  },
};
</script>