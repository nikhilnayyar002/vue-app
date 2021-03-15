<template>
  <div
    class="BecomeHostMessage bg-secondary position-fixed px-5 py-4 rounded-3 shadow-lg"
  >
    <div class="flex-nowrap g-0 row mb-4">
      <div class="col-auto">
        <Avatar :src="SampleHimanshu" />
      </div>
      <div class="col fs-7 ps-2 overflow-hidden">
        <p class="mb-0">
          <span class="fw-bold">Mayank Kanela</span> requested to become host.
          👋🏻
        </p>
      </div>
    </div>
    <div class="BecomeHost-accept-reject row g-0 flex-nowrap">
      <button class="btn col fs-7 fw-bold shadow btn-primary">Accept</button>
      <div class="col-auto BecomeHost-accept-reject__border my-1 p-2"></div>
      <button class="btn col fs-7 text-body fw-bold shadow">Reject</button>
    </div>
  </div>
</template>

<script>
import Avatar from "../common/Avatar.vue";
import SampleHimanshu from "../../assets/sample-h.jpg";

export default {
  name: "BecomeHostMessage",
  data() {
    return {
      SampleHimanshu,
    };
  },
  components: {
    Avatar,
  },
};
</script>
<style>
.BecomeHostMessage {
  top: 125px;
  width: 25rem;
  max-width: 100%;
  left: 20px;
}
.BecomeHost-accept-reject:hover .BecomeHost-accept-reject__border {
  visibility: hidden;
}
</style>

