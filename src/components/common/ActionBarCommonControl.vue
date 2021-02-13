<template>
  <div>
    <button
      class="align-items-center btn btn-secondary d-flex justify-content-center p-0 rounded-circle box-3rem mb-3 mx-auto"
    >
      <slot></slot>
    </button>
    <div class="fs-7 text-center opacity-50">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "ActionBarCommonControl",
  props: ["label"],
};
</script>