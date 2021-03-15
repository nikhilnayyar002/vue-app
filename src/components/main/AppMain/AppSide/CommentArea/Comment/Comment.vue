<template>
  <div>
    <div class="border-top opacity-70"></div>
    <NormalComment v-if="type === 'NORMAL'" />
  </div>

</template>

<script>
import NormalComment from "./NormalComment.vue";

export default {
  name: "Comment",
  props: ["type"],
  components: {
    NormalComment,
  },
};
</script>


