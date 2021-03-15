<template>
  <div class="AppMain row g-0 flex-nowrap h-100">
    <div class="col">
      <AppContent />
    </div>
    <div class="col-auto" style="z-index:200;">
      <AppSide />
    </div>
  </div>
</template>

<script>
import AppContent from "./AppContent/AppContent.vue";
import AppSide from "./AppSide/AppSide.vue";

export default {
  name: "AppMain",
  components: {
    AppContent,
    AppSide,
  },
};
</script>
<style lang="scss">
@use "@/styles/variables";

.AppMain {
  padding: 2rem variables.$app-main-padding-x;
}
</style>