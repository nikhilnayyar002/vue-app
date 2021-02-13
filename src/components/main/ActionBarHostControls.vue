<template>
  <ActionBarCommonControl label="Video"> <VideoIcon /></ActionBarCommonControl>
  <ActionBarCommonControl label="Audio"> <MicIcon /></ActionBarCommonControl>
  <ActionBarCommonControl label="Share">
    <ShareScreenIcon
  /></ActionBarCommonControl>
</template>

<script>
import MicIcon from "../common/Icons/MicIcon.vue";
import ShareScreenIcon from "../common/Icons/ShareScreenIcon.vue";
import VideoIcon from "../common/Icons/VideoIcon.vue";
import ActionBarCommonControl from "../common/ActionBarCommonControl.vue";

export default {
  name: "ActionBarHostControls",
  components: {
    ActionBarCommonControl,
    VideoIcon,
    MicIcon,
    ShareScreenIcon,
  },
};
</script>