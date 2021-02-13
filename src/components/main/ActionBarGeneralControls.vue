<template>
  <ActionBarCommonControl label="Chat"> <ChatIcon /></ActionBarCommonControl>
   <ActionBarCommonControl label="Leave"> <LeaveIcon /></ActionBarCommonControl>
</template>

<script>
import ActionBarCommonControl from "../common/ActionBarCommonControl.vue";
import ChatIcon from "../common/Icons/ChatIcon.vue";
import LeaveIcon from "../common/Icons/LeaveIcon.vue";

export default {
  name: "ActionBarGeneralControls",
  components: {
    ActionBarCommonControl,
    LeaveIcon,
    ChatIcon,
  },
};
</script>