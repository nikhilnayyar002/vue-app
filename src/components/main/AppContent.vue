<template>
  <div class="h-100 w-100 row g-0 d-flex flex-nowrap position-relative">
    <Surface />
  </div>
</template>

<script>
import Surface from "./Surface.vue";

export default {
  name: "AppContent",
  components: {
    Surface,
  },
};
</script>