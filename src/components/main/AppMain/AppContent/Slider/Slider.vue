<template>
  <SliderElement
    id="firstSliderElem"
    ref="firstElemRef"
    @click="onSliderElemClick(0)"
  >
    <VideoScreen />
  </SliderElement>
  <SliderElement
    id="secondSliderElem"
    ref="secondElemRef"
    @click="onSliderElemClick(1)"
  >
    <RemoteHosts />
  </SliderElement>
</template>

<script>
import SliderElement from "./SliderElement/SliderElement.vue";
import { ref, onMounted } from "vue";
import VideoScreen from "./SliderElement/VideoScreen/VideoScreen.vue";
import RemoteHosts from "./SliderElement/RemoteHosts/RemoteHosts.vue";

export default {
  name: "Slider",
  components: {
    SliderElement,
    VideoScreen,
    RemoteHosts,
  },
  setup() {
    const firstElemRef = ref(null);
    const secondElemRef = ref(null);

    function onSliderElemClick(elemNum) {
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
      onSliderElemClick,
    };
  },
};
</script>
<style lang="scss">
@use "@/styles/variables";
@use "sass:math";

$anonymous-1: math.ceil(variables.$app-main-padding-x/2);

#firstSliderElem.in-active {
  left: calc(-100% - #{$anonymous-1});
}
#secondSliderElem.in-active {
  left: calc(100% + var(--app-side-toggle-value) + #{$anonymous-1});
}
</style>