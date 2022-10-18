<template>
  <div id="app">
    <GirlOne v-if="showV1" @reloadV1="reloadGirl1" />

    <GirlTwo />
  </div>
</template>

<script>
import GirlOne from "@/components/GirlOne.vue";
import GirlTwo from "@/components/GirlTwo.vue";

export default {
  name: "App",
  data() {
    return {
      autoPlay: true,
      showV1: true,
    };
  },
  methods: {
    reloadGirl1(val) {
      this.showV1 = val;
      this.$nextTick(() => {
        this.showV1 = true;
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
}
#app {
  position: relative;
  background: rgba(0, 0, 0);
  height: 100vh;
}
</style>
