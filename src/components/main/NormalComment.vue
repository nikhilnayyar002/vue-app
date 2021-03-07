<template>
  <div class="row g-0 flex-nowrap py-3">
    <div class="col-auto">
      <Avatar :src="SampleRajat" />
    </div>
    <div class="col fs-7 ps-2 overflow-hidden">
      <p class="fw-bold mb-1 text-truncate">Nikhil Nayyar</p>
      <p class="m-0">Hello Everyone</p>
    </div>
  </div>
</template>

<script>
import Avatar from "../common/Avatar.vue";
import SampleRajat from "../../assets/sample-r.jpg";
export default {
  name: "NormalComment",
  data() {
    return {
      SampleRajat,
    };
  },
  components: {
    Avatar,
  },
};
</script>