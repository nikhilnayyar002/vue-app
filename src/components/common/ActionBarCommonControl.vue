<template>
  <div :class="['ActionBarCommonControl',{ 'ActionBarCommonControl--active': isActive }]">
    <button
      :title="label"
      class="shadow align-items-center btn btn-secondary d-flex justify-content-center p-0 rounded-circle box-3rem mb-3 mx-auto"
      @click="this.$emit('click')"
    >
      <slot></slot>
    </button>
    <!-- <div class="fs-7 text-center fw-bold">{{ label }}</div> -->
  </div>
</template>

<script>
export default {
  name: "ActionBarCommonControl",
  props: ["label", "isActive"],
  emits: ["click"],
};
</script>
<style lang="scss">
@use "../../styles/variables";
.ActionBarCommonControl--active svg * {
  fill: variables.$primary;
}
</style>