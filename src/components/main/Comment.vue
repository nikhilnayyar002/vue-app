<template>
  <div>
    <div class="border-top opacity-70"></div>
    <NormalComment v-if="type === 'NORMAL'" />
    <HandRaiseComment v-if="type === 'HAND_RAISE'" />
  </div>
</template>

<script>
import HandRaiseComment from "./HandRaiseComment.vue";
import NormalComment from "./NormalComment.vue";

export default {
  name: "Comment",
  props: ["type"],
  components: {
    NormalComment,
    HandRaiseComment,
  },
};
</script>


