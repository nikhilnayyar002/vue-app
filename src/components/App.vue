<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
/** importing styles */
import "../styles/index.scss";
/** */
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>