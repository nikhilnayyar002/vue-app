<template>
  <div
    class="CommentArea bg-secondary h-100 px-4 rounded-3 flex-column flex-nowrap g-0 h-100 row"
  >
    <div class="col-auto opacity-70 pb-3 pt-4">All Comments</div>
    <div class="col overflow-auto">
      <Comment type="NORMAL" />
      <Comment type="HAND_RAISE" />
    </div>
    <div class="col-auto">
      <CommentControls />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
import CommentControls from "./CommentControls.vue";

export default {
  name: "CommentArea",
  components: {
    Comment,
    CommentControls,
  },
};
</script>
<style >
.CommentArea {
  box-shadow: 0px 0px 8px 0px #000000c7;
}
</style>