<template>
  <div class="ActionBar d-flex flex-nowrap">
    <div>
      <button
        class="align-items-center btn btn-secondary d-inline-flex justify-content-center p-0 rounded-circle box-3rem mb-3"
      >
        <VideoIcon />
      </button>
      <div class="fs-7 text-center">Video</div>
    </div>
    <div>
      <button
        class="align-items-center btn btn-secondary d-inline-flex justify-content-center p-0 rounded-circle box-3rem mb-3"
      >
        <MicIcon />
      </button>
      <div class="fs-7 text-center">Audio</div>
    </div>
    <div>
      <button
        class="align-items-center btn btn-secondary d-inline-flex justify-content-center p-0 rounded-circle box-3rem mb-3"
      >
        <ShareScreenIcon />
      </button>
      <div class="fs-7 text-center opacity-50">Share</div>
    </div>
    <div>
      <button
        class="align-items-center btn btn-secondary d-inline-flex justify-content-center p-0 rounded-circle box-3rem mb-3"
      >
        <ChatIcon />
      </button>
      <div class="fs-7 text-center opacity-50">Chat</div>
    </div>
    <div>
      <button
        class="align-items-center btn btn-secondary d-inline-flex justify-content-center p-0 rounded-circle box-3rem mb-3"
      >
        <LeaveIcon />
      </button>
      <div class="fs-7 text-center opacity-50">Leave</div>
    </div>
  </div>
</template>

<script>
import ChatIcon from "../common/Icons/ChatIcon.vue";
import LeaveIcon from "../common/Icons/LeaveIcon.vue";
import MicIcon from "../common/Icons/MicIcon.vue";
import ShareScreenIcon from "../common/Icons/ShareScreenIcon.vue";
import VideoIcon from "../common/Icons/VideoIcon.vue";

export default {
  name: "ActionBar",
  components: {
    VideoIcon,
    MicIcon,
    LeaveIcon,
    ShareScreenIcon,
    ChatIcon,
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