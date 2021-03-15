<template>
  <div class="align-items-center bg-secondary flex-nowrap g-0 px-3 py-2 row">
    <div class="col-auto">
      <button class="btn btn-secondary rounded-circle shadow-sm">
        <ArrowIcon class="box-1rem" />
      </button>
    </div>
    <div class="col px-3 text-truncate">Open Dev Meet 2021 </div>
    <div class="col-auto">
      <button
        class="align-items-center btn-primary btn d-inline-flex flex-nowrap"
        @click="toggleFullScreen"
      >
        <ExitFullScreenIcon />
        <span id="full-screen-toggle-btn-text">Full Screen</span>
      </button>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "../common/Icons/ArrowIcon.vue";
import ExitFullScreenIcon from "../common/Icons/ExitFullScreenIcon.vue";
import {
  enterFullscreen,
  exitFullscreen,
  isFullScreenCurrently,
} from "../../lib/common";

export default {
  name: "AppNavbar",
  methods: {
    toggleFullScreen() {
      isFullScreenCurrently()
        ? exitFullscreen()
        : enterFullscreen(document.documentElement);
    },
  },
  components: {
    ArrowIcon,
    ExitFullScreenIcon,
  },
};
</script>
<style scoped>
#full-screen-toggle-btn-text {
  padding-left: 0.7rem;
  padding-top: 1px;
}
</style>