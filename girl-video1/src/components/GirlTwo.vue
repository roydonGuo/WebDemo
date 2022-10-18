<template>
  <div class="girl2">
    <!-- 第二版 -->
    <video
      id="girl-video-2"
      v-if="showVideo"
      @canplay="getVideoTime()"
      controls="controls"
      autoplay
      poster
      preload
      ref="videoTwo"
      width="100%"
      src="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw"
    ></video>
    <div class="controller">
      <el-button
        class="next"
        icon="el-icon-arrow-left"
        @click="next"
      ></el-button>
      <button class="refresh" @click="refresh">自动播放</button>
      <el-button
        class="next"
        icon="el-icon-arrow-right"
        @click="next"
      ></el-button>
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
  },
  data() {
    return {
      showVideo: true,
      duration: 0, // 视频总时长
      currentTime: 0, // 目前时长
    };
  },
  methods: {
    getVideoTime() {
      this.duration = this.$refs.videoTwo.duration;
      this.currentTime = this.$refs.videoTwo.currentTime;
      // video();
    },
    refresh() {
      // 卸载
      this.showVideo = false;
      this.$nextTick(() => {
        // 加载
        this.showVideo = true;
      });
    //   setInterval(() => {
    //     // 卸载
    //     this.showVideo = false;
    //     this.$nextTick(() => {
    //       // 加载
    //       this.showVideo = true;
    //     });
    //   }, this.duration * 1000);
    },
    next() {
      // 卸载
      this.showVideo = false;
      this.$nextTick(() => {
        // 加载
        this.showVideo = true;
      });
    },
  },
};
</script>


<style scoped>
.girl2 {
  width: 40%;
  background: black;
  position: absolute;
  right: 10%;
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
.el-button{
  padding: 4% 4%;
}
</style>