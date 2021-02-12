<template>
  <div class="HandRaiseComment my-3 p-3 rounded-3">
    <div class="flex-nowrap g-0 row mb-3">
      <div class="col-auto">
        <Avatar :src="SampleHimanshu" />
      </div>
      <div class="col fs-7 ps-2 overflow-hidden">
        <p class="mb-0"><span class="fw-bold">Himanshu Sharma</span> raised a hand. 👋🏻</p>
      </div>
    </div>
    <div class="handraise-accept-reject row g-0 flex-nowrap">
      <button class="btn btn-outline-secondary col fs-7 fw-bold text-white">Accept</button>
      <div class="handraise-accept-reject__border border-end col-auto opacity-50 my-1"></div>
      <button class="btn btn-outline-secondary col fs-7 text-white opacity-70">Reject</button>
    </div>
  </div>
</template>

<script>
import Avatar from "../common/Avatar.vue";
import SampleHimanshu from "../../assets/sample-himanshu.jpg";

export default {
  name: "HandRaiseComment",
  data: function () {
    return {
      SampleHimanshu
    }
  },
  components:{
    Avatar
  }
};
</script>
<style>
.HandRaiseComment {
  background: rgba(250, 250, 250, 0.1);
}
.handraise-accept-reject:hover .handraise-accept-reject__border{
    visibility: hidden;
}
</style>

