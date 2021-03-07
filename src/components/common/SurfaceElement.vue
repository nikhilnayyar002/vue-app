<template>
  <div class="SurfaceElement position-absolute h-100 w-100 bg-secondary shadow-lg" @click="this.$emit('click')">
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
  transition: left 0.5s;
  left: 0;
  cursor: pointer;
}
</style>