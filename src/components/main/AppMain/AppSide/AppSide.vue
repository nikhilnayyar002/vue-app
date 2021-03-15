<template>
  <div v-show="isAppSideOpen.value" class="AppSide h-100 ps-4">
    <CommentArea />
  </div>
</template>

<script>
import CommentArea from "./CommentArea/CommentArea.vue";

export default {
  name: "AppSide",
  inject: ["isAppSideOpen"],
  components: {
    CommentArea,
  },
};
</script>
<style lang="scss">
@use "@/styles/variables";

.AppSide {
  width: variables.$app-side-width;
}
</style>