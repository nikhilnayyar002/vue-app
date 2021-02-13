<template>
  <ActionBarCommonControl label="Video" :isActive="true"> <VideoIcon /></ActionBarCommonControl>
  <ActionBarCommonControl label="Audio" :isActive="true"> <MicIcon /></ActionBarCommonControl>
  <ActionBarCommonControl label="Share">
    <ShareScreenIcon
  /></ActionBarCommonControl>
</template>

<script>
import MicIcon from "../common/icons/MicIcon.vue";
import ShareScreenIcon from "../common/icons/ShareScreenIcon.vue";
import VideoIcon from "../common/icons/VideoIcon.vue";
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