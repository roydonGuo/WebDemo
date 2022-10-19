<template>
  <div id="app">
    <GirlOne
      v-if="showV1"
      :autoLeftV="autoLeftV"
      @autoPlayV1="autoPlayVideo1"
      @reloadV1="reloadGirl1"
    />

    <GirlTwo
      v-if="showV2"
      :autoRightV="autoRightV"
      @autoPlayV2="autoPlayVideo2"
      @reloadV2="reloadGirl2"
    />
  </div>
</template>

<script>
import GirlOne from "@/components/GirlOne.vue";
// https://tucdn.wpon.cn/api-girl/index.php?wpon=302
import GirlTwo from "@/components/GirlTwo.vue";
// https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw

export default {
  name: "App",
  data() {
    return {
      autoPlay: true,
      autoLeftV: true,
      autoRightV: true,
      showV1: true,
      showV2: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.$message({
          message: "视频默认自动播放",
          center: true,
          iconClass: "el-icon-message-solid",
          duration: 1500,
          offset: 10,
        });
      }, 2000);
    },
    autoPlayVideo1(val) {
      this.autoLeftV = val;
    },
    autoPlayVideo2(val) {
      this.autoRightV = val;
    },
    reloadGirl1(val) {
      this.showV1 = val;
      this.$nextTick(() => {
        this.showV1 = true;
      });
    },
    reloadGirl2(val) {
      this.showV2 = val;
      this.$nextTick(() => {
        this.showV2 = true;
      });
    },
  },
  components: {
    GirlOne,
    GirlTwo,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
  background: rgba(0, 0, 0);
  height: 100vh;
}
</style>
