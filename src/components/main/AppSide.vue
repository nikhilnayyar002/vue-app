<template>
  <div v-show="isAppSideOpen.value" class="AppSide bg-secondary h-100 px-4 rounded-3">
    <CommentArea />
  </div>
</template>

<script>
import CommentArea from "./CommentArea.vue";

export default {
  name: "AppSide",
  inject: ["isAppSideOpen"],
  components: {
    CommentArea,
  },
};
</script>
<style lang="scss">
@use "../../styles/variables";

.AppSide {
  width: variables.$app-side-width;
}
</style>