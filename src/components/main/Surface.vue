<template>
  <SurfaceElement
    id="firstSurfaceElem"
    ref="firstElemRef"
    @click="onSurfaceElemClick(0)"
  >
    <Reflection />
  </SurfaceElement>
  <SurfaceElement
    id="secondSurfaceElem"
    ref="secondElemRef"
    @click="onSurfaceElemClick(1)"
  >
    <RemoteHosts />
  </SurfaceElement>
</template>

<script>
import SurfaceElement from "../common/SurfaceElement.vue";
import { ref, onMounted } from "vue";
import Reflection from "./Reflection.vue";
import RemoteHosts from "./RemoteHosts.vue";

export default {
  name: "Surface",
  components: {
    SurfaceElement,
    Reflection,
    RemoteHosts,
  },
  setup() {
    const firstElemRef = ref(null);
    const secondElemRef = ref(null);

    function onSurfaceElemClick(elemNum) {
      switch (elemNum) {
        case 0: {
          firstElemRef.value.$el.classList.remove("in-active");
          secondElemRef.value.$el.classList.add("in-active");
          break;
        }
        case 1: {
          firstElemRef.value.$el.classList.add("in-active");
          secondElemRef.value.$el.classList.remove("in-active");
          break;
        }
        default:
          break;
      }
    }

    onMounted(() => {
      secondElemRef.value.$el.classList.add("in-active");
    });

    //return it so that its available (computed properties, methods, lifecycle hooks and so on) as well as to the component's template.
    return {
      firstElemRef,
      secondElemRef,
      onSurfaceElemClick,
    };
  },
};
</script>
<style lang="scss">
@use "../../styles/variables";
@use "sass:math";

$anonymous-1: math.ceil(variables.$app-main-padding-x/2);

#firstSurfaceElem.in-active {
  left: calc(-100% - #{$anonymous-1});
}
#secondSurfaceElem.in-active {
  left: calc(100% + var(--app-side-toggle-value) + #{$anonymous-1});
}
</style>