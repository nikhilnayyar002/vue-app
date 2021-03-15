<template>
  <div class="ActionBar d-flex flex-nowrap">
    <ActionBarHostControls />
    <ActionBarAudienceControls />
    <ActionBarGeneralControls />
  </div>
</template>

<script>
import ActionBarGeneralControls from "./ActionBarGeneralControls.vue";
import ActionBarHostControls from "./ActionBarHostControls.vue";
import ActionBarAudienceControls from "./ActionBarAudienceControls.vue";

export default {
  name: "ActionBar",
  components: {
    ActionBarGeneralControls,
    ActionBarHostControls,
    ActionBarAudienceControls,
  },
};
</script>
<style>
.ActionBar {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: 2rem;
}
</style>