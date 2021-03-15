<template>
  <div class="SliderElement position-absolute h-100 w-100 bg-secondary shadow-lg" @click="this.$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SliderElement",
  emits: ["click"],
};
</script>
<style>
.SliderElement {
  transition: left 0.5s;
  left: 0;
  cursor: pointer;
}
</style>