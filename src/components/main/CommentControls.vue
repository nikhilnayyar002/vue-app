<template>
  <div>
    <div class="border-top opacity-70"></div>
    <div class="row g-0 flex-nowrap py-3">
      <div class="align-self-end col-auto pb-2 pe-2">
        <Avatar :src="SampleRajat" />
      </div>
      <div class="col comment-control-box g-0 p-2 rounded-3 row">
        <textarea
          ref="textAreaRef"
          class="bg-transparent comment-control-box__textarea text-white col px-2 align-self-center"
          @keyup="autoGrow"
          rows="1"
          placeholder="Enter your comment"
        >
        </textarea>
        <div class="col-auto ps-2 align-self-end">
          <button class="box-2rem btn btn-primary p-0 rounded-circle" @click="resetMsgInput">
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
  </div>
</template>

<script>
import Avatar from "../common/Avatar.vue";
import SampleRajat from "../../assets/sample-rajat.jpg";
import { ref, onMounted } from "vue";

export default {
  name: "CommentControls",
  setup() {
    const defaultMsgInputHeightRef = ref("");
    const textAreaRef = ref(null);

    function autoGrow() {
      let element = textAreaRef.value;
      element.style.height = "auto";
      if (element.scrollHeight !== defaultMsgInputHeightRef.value) {
        element.style.height = element.scrollHeight + "px";
      }
    }

    function resetMsgInput() {
      textAreaRef.value.value = ""
      textAreaRef.value.style.height = "auto"
    }

    onMounted(() => {
      defaultMsgInputHeightRef.value = textAreaRef.value.clientHeight;
    })

    //return it so that its available (computed properties, methods, lifecycle hooks and so on) as well as to the component's template.
    return {
      textAreaRef,
      autoGrow,
      resetMsgInput,
    }
  },
  data: function () {
    return {
      SampleRajat,
    };
  },
  methods: {},
  components: {
    Avatar,
  },
};
</script>
<style>
.comment-control-box {
  background: rgba(250, 250, 250, 0.1);
}
.comment-control-box__textarea {
  resize: none;
  overflow: auto;
  max-height: 7rem;
  min-height: auto;
}
</style>