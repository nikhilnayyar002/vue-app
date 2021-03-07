<template>
  <ActionBarCommonControl label="Become Host"> <BecomeHostIcon /></ActionBarCommonControl>
</template>

<script>
import BecomeHostIcon from "../common/icons/BecomeHostIcon.vue";
import ActionBarCommonControl from "../common/ActionBarCommonControl.vue";

export default {
  name: "ActionBarParticipantControls",
  components: {
    ActionBarCommonControl,
    BecomeHostIcon,
  },
};
</script>