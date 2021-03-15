<template>
  <div class="h-100 w-100 row g-0 d-flex flex-nowrap position-relative">
    <Slider />
  </div>
</template>

<script>
import Slider from "./Slider/Slider.vue";

export default {
  name: "AppContent",
  components: {
    Slider,
  },
};
</script>