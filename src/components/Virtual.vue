<template>
  <div>
    <swiper
      @swiper="setSwiperRef"
      :slidesPerView="5"
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :virtual="true"
      class="virtual-slider"
    >
      <swiper-slide
        v-for="(slideContent, index) in slides"
        :key="index"
        :virtualIndex="index"
        >{{ slideContent }}</swiper-slide
      >
    </swiper>
    <p class="append-buttons">
      <button @click="prepend()" class="prepend-2-slides">
        Prepend 2 Slides
      </button>
      <button @click="slideTo(1)" class="prepend-slide">Go to slide 1</button>
      <button @click="slideTo(250)" class="slide-250">Go to slide 250</button>
      <button @click="slideTo(500)" class="slide-500">Go to slide 500</button>
      <button @click="append()" class="append-slides">Append slide</button>
    </p>
  </div>
</template>

<style>
.swiper.virtual-slider {
  height: 300px;
}

.virtual-slider .swiper-slide {
  text-align: center;
  font-size: 18px;
  width: 300px !important;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}

.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
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
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Virtual } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Virtual]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    // Create array with 1000 slides
    const slides = Array.from({ length: 600 }).map(
      (_, index) => `${index + 1}`
    );
    return {
      slides,
      swiperRef: null,
      appendNumber: 600,
      prependNumber: 1,
    };
  },
  methods: {
    setSwiperRef(swiper) {
      this.swiperRef = swiper;
    },
    slideTo(index) {
      this.swiperRef.slideTo(index - 1, 0);
    },
    append() {
      this.swiperRef.virtual.appendSlide("Slide " + ++this.appendNumber);
    },
    prepend() {
      this.swiperRef.virtual.prependSlide([
        --this.prependNumber,
        --this.prependNumber,
      ]);
    },
  },
};
</script>
