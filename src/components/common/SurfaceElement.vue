<template>
  <div class="SurfaceElement position-absolute h-100 w-100" @click="this.$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SurfaceElement",
  emits: ["click"],
};
</script>
<style>
.SurfaceElement {
  transition: left 1s;
  left: 0;
  cursor: pointer;
}
</style>