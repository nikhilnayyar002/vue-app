<template>
  <div
    class="align-items-center bg-secondary flex-nowrap g-0 px-3 py-2 row"
  >
    <div class="col-auto">
      <button class="btn btn-secondary">
        <ArrowIcon class="box-1rem" />
      </button>
    </div>
    <div class="col px-3 text-truncate">Organic Chemistry Class 7</div>
    <div class="col-auto">
      <button
        class="align-items-center btn-black btn d-inline-flex flex-nowrap"
      >
        <ExitFullScreenIcon />
        <span id="full-screen-toggle-btn-text">Exit Full Screen</span>
      </button>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "../common/Icons/ArrowIcon.vue";
import ExitFullScreenIcon from "../common/Icons/ExitFullScreenIcon.vue";

export default {
  name: "AppNavbar",
  components: {
    ArrowIcon,
    ExitFullScreenIcon,
  },
};
</script>
<style scoped>

#full-screen-toggle-btn-text {
  padding-left: 0.7rem; padding-top: 1px;
}

</style>