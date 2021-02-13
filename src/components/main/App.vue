<template>
  <div class="row g-0 flex-nowrap flex-column h-100">
    <div class="col-auto">
      <AppNavbar />
    </div>
    <div class="col overflow-hidden">
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
import { computed, ref } from "vue";
/** */

export default {
  name: "App",
  setup() {
    const isAppSideOpenRef = ref(false);
    function toggleAppSide() {
      isAppSideOpenRef.value = !isAppSideOpenRef.value;
      
      /** update CSS variable value so that it consumers get aware of it. */
      const appSideWidth = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--app-side-width");

      document.documentElement.style.setProperty(
        "--app-side-toggle-value",
        isAppSideOpenRef.value ? appSideWidth : "0rem"
      );
      /** */
    }
    return {
      isAppSideOpenRef,
      toggleAppSide,
    };
  },
  provide() {
    return {
      isAppSideOpen: computed(() => this.isAppSideOpenRef),
      toggleAppSide: this.toggleAppSide,
    };
  },
  components: {
    AppNavbar,
    AppMain,
    AppFooter,
  },
};
</script>