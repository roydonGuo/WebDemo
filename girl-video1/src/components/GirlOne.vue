<template>
  <div class="girl1">
    <!-- 第一版 -->
    <video
      id="girl-video-1"
      controls="controls"
      v-if="showVideo"
      autoplay
      poster
      preload
      ref="videoOne"
      width="100%"
      src="https://tucdn.wpon.cn/api-girl/index.php?wpon=302"
    ></video>

    <div class="controller">
      <el-button
        class="next"
        icon="el-icon-arrow-left"
        @click="next"
      ></el-button>
      <button class="refresh" @click="autoSwift">
        {{ autoPlayVideo === true ? "自动播放" : "手动播放" }}
      </button>
      <el-button
        class="next"
        icon="el-icon-arrow-right"
        @click="next"
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GirlOne",
  props: {
    // msg: String,
  },
  data() {
    return {
      showVideo: true,
      duration: 0, // 视频总时长
      currentTime: 0, // 目前时长
      videoPlay: true,
      autoPlayVideo: true,
    };
  },
  created() {
    // this.$message("左侧为自动播放,动态可调,请点击视频下方'自动播放'按钮");
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
      this.$message({
        message: " 左侧为" + (this.autoPlayVideo === true ? "自动播放" : "手动播放"),
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
  width: 40%;
  background: black;
  position: absolute;
  left: 10%;
  height: 100%;
}
video {
  /* border: 1px solid black; */
  /* width: 90%; */
  text-align: center;
  height: 90%;
  display: block;
  margin: 0 auto;
}
.controller {
  margin: 0 auto;
  text-align: center;
  height: 10%;
  width: 60%;
  background: pink;
  opacity: 0.9;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.controller .refresh {
  display: inline-block;
  height: 64%;
  width: 12%;
  margin: 0px 1%;
  background: aquamarine;
  border-radius: 50%;
  line-height: 1;
  color: black;
  font-weight: 800;
  border: none;
}
.controller .refresh:hover {
  background: rgb(90, 250, 200);
  opacity: 1;
}
.el-button {
  padding: 4% 4%;
}
</style>