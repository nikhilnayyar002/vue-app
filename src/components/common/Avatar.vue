<template>
  <img class="box-2rem rounded-circle" :src="src" alt="" />
</template>

<script>
export default {
  props: ["src"],
  name: "Avatar",
};
</script>