<template>
  <ActionBarCommonControl label="Raise hand"> <HandRaiseIcon /></ActionBarCommonControl>
</template>

<script>
import HandRaiseIcon from "../common/Icons/HandRaiseIcon.vue";
import ActionBarCommonControl from "../common/ActionBarCommonControl.vue";

export default {
  name: "ActionBarParticipantControls",
  components: {
    ActionBarCommonControl,
    HandRaiseIcon,
  },
};
</script>