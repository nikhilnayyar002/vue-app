<template>
  <div class="row g-0 flex-nowrap flex-column h-100">
    <div class="col-auto">
      <AppNavbar />
    </div>
    <div class="col">
      <AppMain />
    </div>
    <div class="col-auto">
      <AppFooter />
    </div>
  </div>
</template>

<script>
/** import index style */
import "../../styles/index.scss";
import AppMain from "./AppMain";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";

/** */

export default {
  name: "App",
  components: {
    AppNavbar,
    AppMain,
    AppFooter,
  },
};
</script>