import { createWebHistory, createRouter } from "vue-router";
import DefaultSlider from "@/components/DefaultSlider.vue";
import NavigationSlider from "@/components/Navigation.vue";
import PaginationSlider from "@/components/Pagination.vue";
import CardStackSlider from "@/components/CardStack.vue";
import CoverFlowEffectSlider from "@/components/CoverFlowEffect.vue";
import MouseWheelSlider from "@/components/MouseWheel.vue";
import VirtualSlider from "@/components/Virtual.vue";

const routes = [
  {
    path: "/default-slider",
    name: "DefaultSlider",
    component: DefaultSlider,
  },
  {
    path: "/navigation-slider",
    name: "NavigationSlider",
    component: NavigationSlider,
  },
  {
    path: "/pagination-slider",
    name: "PaginationSlider",
    component: PaginationSlider,
  },
  {
    path: "/coverflow-effect-slider",
    name: "CoverFlowEffectSlider",
    component: CoverFlowEffectSlider,
  },
  {
    path: "/card-stack-slider",
    name: "CardStackSlider",
    component: CardStackSlider,
  },
  {
    path: "/mouse-wheel-slider",
    name: "MouseWheelSlider",
    component: MouseWheelSlider,
  },
  {
    path: "/virtual-slider",
    name: "VirtualSlider",
    component: VirtualSlider,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
