<template>
  <div class="girl2">
    <!-- 第二版 -->
    <video
      id="girl-video-2"
      v-if="showVideo"
      controls="controls"
      autoplay
      poster
      :loop="loopOrNo"
      preload
      ref="videoTwo"
      width="100%"
      src="https://v.api.aa1.cn/api/api-fj/index.php?aa1=suf7y58th48u935"
    ></video>
    <div class="r-app">
      <div class="controller">
        <button class="refresh" @click="autoSwift">
          {{ autoRightV === true ? "自动" : "手动" }}
          <!-- {{ autoRightV }} -->
        </button>
        <el-button
          circle
          size="small"
          class="next"
          icon="el-icon-arrow-down"
          @click="next"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
// var video = () => {
//   const videoTime = document.querySelector("#girl-video-2");
//   console.log("v2总时长" + videoTime.duration);
//   console.log("v2当前时长" + videoTime.currentTime);
// };
export default {
  name: "GirlTwo",
  props: {
    // msg: String,
    autoRightV: Boolean,
  },
  data() {
    return {
      showVideo: true,
      duration: 0, // 视频总时长
      currentTime: 0, // 目前时长
      videoPlay: true,
      autoPlayVideo: this.autoRightV,
    };
  },
  computed: {
    loopOrNo() {
      return !this.autoPlayVideo;
    },
  },
  mounted() {
    this.$refs.videoTwo.addEventListener("play", () => {
      this.videoPlay = "play";
      this.duration = this.$refs.videoTwo.duration;
      this.currentTime = this.$refs.videoTwo.currentTime;
    });
    // 监听视频暂停
    this.$refs.videoTwo.addEventListener("pause", () => {
      this.videoPlay = "pause";
      // this.currentTime = this.$refs.videoOne.currentTime;
      if (this.autoPlayVideo === true) {
        if (this.$refs.videoTwo.duration === this.$refs.videoTwo.currentTime) {
          this.autoReloadV2();
        }
      }
    });
  },
  methods: {
    autoReloadV2() {
      // alert("自动播放开始");
      this.showVideo = false;
      this.$emit("reloadV2", this.showVideo);
    },
    autoSwift() {
      this.autoPlayVideo = !this.autoPlayVideo;
      // this.autoRightV = !this.autoRightV;
      this.$emit("autoPlayV2", this.autoPlayVideo);
      this.$message({
        message:
          " 右侧为" +
          (this.autoPlayVideo === true ? "自动播放" : "手动播放") +
          (this.loopOrNo === true ? ",当前视频开启循环" : "。"),
        showClose: true,
        center: true,
        dangerouslyUseHTMLString: true,
        iconClass: "el-icon-message-solid",
        duration: 2000,
        offset: 10,
      });
    },
    next() {
      this.showVideo = false;
      this.$emit("reloadV2", this.showVideo);
    },
  },
};
</script>


<style scoped>
.girl2 {
  width: 50%;
  background: black;
  position: absolute;
  right: 0;
  height: 100%;
  border-left: 1px solid rgb(0, 94, 63)
}
video {
  /* border: 1px solid black; */
  /* width: 90%; */
  text-align: center;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.r-app {
  opacity: 0.1;
}
.r-app:hover {
  opacity: 1;
}
.controller {
  position: absolute;
  bottom: 10%;
  left: 0;
  margin: 0 auto;
  text-align: center;
  height: 8%;
  width: 100%;
  /* background: pink; */
  opacity: 0.9;
  border-radius: 30px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.controller .refresh {
  display: inline-block;
  height: 40%;
  width: 4%;
  margin: 0px 1%;
  background: rgb(50, 111, 80);
  border-radius: 10px;
  line-height: 1;
  color: black;
  font-weight: 300;
  border: none;
  position: absolute;
  right: 0;
}
.controller .refresh:hover {
  background: rgb(10, 120, 80);
  border: none;
  opacity: 1;
}
.el-button {
  position: absolute;
  /* padding: 4% 4%; */
  border-radius: 10px;
  left: 1%;
  background: none !important;
  border: none;
  color: aqua;
}
.el-button:hover {
  background: rgb(110, 110, 110) !important;
  color: black;
}
</style>