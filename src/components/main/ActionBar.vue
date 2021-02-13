<template>
  <div class="ActionBar d-flex flex-nowrap">
    <ActionBarHostControls />
    <ActionBarParticipantControls />
    <ActionBarGeneralControls />
  </div>
</template>

<script>
import ActionBarGeneralControls from "./ActionBarGeneralControls.vue";
import ActionBarHostControls from "./ActionBarHostControls.vue";
import ActionBarParticipantControls from "./ActionBarParticipantControls.vue";

export default {
  name: "ActionBar",
  components: {
    ActionBarGeneralControls,
    ActionBarHostControls,
    ActionBarParticipantControls,
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