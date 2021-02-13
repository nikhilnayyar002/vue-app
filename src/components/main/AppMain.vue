<template>
  <div class="AppMain row g-0 flex-nowrap h-100">
    <div class="col">
      <AppContent />
    </div>
    <div class="col-auto" style="z-index:2;">
      <AppSide />
    </div>
  </div>
</template>

<script>
import AppContent from "./AppContent.vue";
import AppSide from "./AppSide.vue";

export default {
  name: "AppMain",
  components: {
    AppContent,
    AppSide,
  },
};
</script>
<style>
.AppMain {
  padding: 2rem 5rem;
}
</style>