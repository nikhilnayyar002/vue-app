<template>
  <div class="AppSide bg-secondary h-100 px-3 rounded-3">
    <CommentArea />
  </div>
</template>

<script>
import CommentArea from "./CommentArea.vue";

export default {
  name: "AppSide",
  components: {
    CommentArea,
  },
};
</script>
<style>
.AppSide {
    width: 20rem;
}
</style>