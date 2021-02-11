<template>
  <div class="d-flex justify-content-center px-3 py-3">
    <ActionBar />
  </div>
</template>

<script>
import ActionBar from "./ActionBar.vue";

export default {
  name: "AppFooter",
  components: {
    ActionBar,
  },
};
</script>