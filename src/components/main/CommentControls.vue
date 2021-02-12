<template>
  <div>
    <div class="border-top opacity-70"></div>
    <div class="row g-0 flex-nowrap py-3 align-items-center">
      <div class="col-auto pe-2">
        <Avatar :src="SampleRajat" />
      </div>
      <div class="col comment-control-box g-0 p-2 rounded-pill row">
        <input
          type="text"
          class="bg-transparent text-white col px-2"
          placeholder="Enter your comment"
        />
        <button class="box-2rem btn btn-primary p-0 rounded-circle col-auto">
          <svg
            class="box-1rem"
            :style="{ transform: 'rotateZ(90deg)' }"
            viewBox="0 0 12.979 6.775"
          >
            <path
              id="Path_4260"
              data-name="Path 4260"
              d="M0,0,4.365,5.1,0,10.159"
              transform="translate(1.41 5.365) rotate(-90)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../common/Avatar.vue";
import SampleRajat from "../../assets/sample-rajat.jpg";

export default {
  name: "CommentControls",
  data: function () {
    return {
      SampleRajat,
    };
  },
  components: {
    Avatar,
  },
};
</script>
<style>
.comment-control-box {
   background: rgba(250, 250, 250, 0.1);
}
</style>