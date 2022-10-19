<template>
  <div class="girl1">
    <!-- 第一版，记得更换api，现在是风景api，在app中 -->
    <video
      id="girl-video-1"
      controls="controls"
      v-if="showVideo"
      autoplay
      :loop="loopOrNo"
      poster
      preload
      ref="videoOne"
      width="100%"
      src="https://v.api.aa1.cn/api/api-fj/index.php?aa1=suf7y58th48u935"
    ></video>
    <div class="l-app">
      <div class="controller" ref="control">
        <button class="refresh" @click="autoSwift">
          {{ autoLeftV === true ? "自动" : "手动" }}
          <!-- {{ autoLeftV }} -->
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
export default {
  name: "GirlOne",
  props: {
    // msg: String,
    autoLeftV: Boolean,
  },
  data() {
    return {
      showVideo: true,
      duration: 0, // 视频总时长
      currentTime: 0, // 目前时长
      videoPlay: true,
      autoPlayVideo: this.autoLeftV,
      // loopOrNo: false,
    };
  },
  created() {
    // this.$message("左侧为自动播放,动态可调,请点击视频下方'自动播放'按钮");
  },
  computed: {
    loopOrNo() {
      return !this.autoPlayVideo;
    },
  },
  mounted() {
    console.log(this.$refs.videoOne);
    // 监听视频播放
    this.$refs.videoOne.addEventListener("play", () => {
      this.videoPlay = "play";
      // console.log(this.$refs.videoOne.duration + "===");
      // console.log(this.$refs.videoOne.currentTime + "===");
      this.duration = this.$refs.videoOne.duration;
      this.currentTime = this.$refs.videoOne.currentTime;
      console.log("video is playing");
      // this.openTimer();
    });
    // 监听视频暂停
    this.$refs.videoOne.addEventListener("pause", () => {
      this.videoPlay = "pause";
      this.currentTime = this.$refs.videoOne.currentTime;
      if (this.autoPlayVideo === true) {
        if (this.$refs.videoOne.duration === this.$refs.videoOne.currentTime) {
          this.autoReloadV1();
        }
      }
      console.log("video is stop");
      // this.closeTimer();
    });
  },
  methods: {
    autoReloadV1() {
      // alert("自动播放开始");
      this.showVideo = false;
      this.$emit("reloadV1", this.showVideo);
    },
    autoSwift() {
      this.autoPlayVideo = !this.autoPlayVideo;
      // this.autoLeftV = !this.autoLeftV;
      this.$emit("autoPlayV1", this.autoPlayVideo);
      this.$message({
        message:
          " 左侧为" +
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
      // this.showVideo = false;
      // this.$nextTick(() => {
      //   this.showVideo = true;
      // });
      this.showVideo = false;
      this.$emit("reloadV1", this.showVideo);
    },
  },
};
</script>


<style scoped>
.girl1 {
  width: 50%;
  background: black;
  position: absolute;
  left: 0;
  height: 100%;
  border-right: 1px solid rgb(0, 94, 63);
}
video {
  /* border: 1px solid black; */
  /* width: 90%; */
  text-align: center;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.l-app {
  /* display: none; */
  opacity: 0.1;
}
.l-app:hover {
  /* display: block; */
  opacity: 1;
}
.controller {
  /* display: none; */
  position: absolute;
  bottom: 10%;
  right: 0;
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
  /* display: none; */
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
  left: 0;
}
.controller .refresh:hover {
  background: rgb(10, 120, 80);
  border: none;
  opacity: 1;
}
.el-button {
  /* display: inline-block; */
  position: absolute;
  /* padding: 4% 4%; */
  border-radius: 10px;
  right: 1%;
  background: none !important;
  border: none;
  color: aqua;
  /* width: 4%; */
}
.el-button:hover {
  background: rgb(110, 110, 110) !important;
  color: black;
}
</style>