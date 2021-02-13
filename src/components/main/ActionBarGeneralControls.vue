<template>
  <ActionBarCommonControl @click="toggleAppSide" label="Chat" :isActive="isAppSideOpen.value">
    <ChatIcon
  /></ActionBarCommonControl>
  <ActionBarCommonControl label="Leave"> <LeaveIcon /></ActionBarCommonControl>
</template>

<script>
import ActionBarCommonControl from "../common/ActionBarCommonControl.vue";
import ChatIcon from "../common/icons/ChatIcon.vue";
import LeaveIcon from "../common/icons/LeaveIcon.vue";

export default {
  name: "ActionBarGeneralControls",
  inject: ["isAppSideOpen","toggleAppSide"],
  components: {
    ActionBarCommonControl,
    LeaveIcon,
    ChatIcon,
  },
};
</script>