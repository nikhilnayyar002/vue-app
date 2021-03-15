<template>
  <ActionBarCommonControl label="Become Host"> <BecomeHostIcon /></ActionBarCommonControl>
</template>

<script>
import BecomeHostIcon from "../../../common/Icons/BecomeHostIcon.vue";
import ActionBarCommonControl from "../../../common/ActionBarCommonControl.vue";

export default {
  name: "ActionBarAudienceControls",
  components: {
    ActionBarCommonControl,
    BecomeHostIcon,
  },
};
</script>