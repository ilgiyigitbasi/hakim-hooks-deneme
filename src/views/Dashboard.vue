<template>
  <div class="dashboard-wrapper">
    <h1 class="h1">Dashboard</h1>
    <div class="column-gap-32px-div">
      <video
        class="video"
        ref="videoPlayer"
        :src="videoSource"
        loop
        muted
        @ended="restartVideo"
      ></video>

      <DashboardList />
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/dashboard/DashboardList.vue";

const isaacvideo = require("@/assets/video/isaacvideo.mp4");
const mobilvideo = require("@/assets/video/mobil.mp4");
export default {
  components: {
    DashboardList,
  },

  data() {
    return {
      isSmallScreen: window.innerWidth < 1000,
    };
  },

  computed: {
    videoSource() {
      return this.isSmallScreen ? mobilvideo : isaacvideo;
    },
  },

  mounted() {
    this.$refs.videoPlayer.play();
    window.addEventListener("resize", this.updateScreenSize);
  },

  methods: {
    restartVideo() {
      this.$refs.videoPlayer.currentTime = 0;
    },
    updateScreenSize() {
      this.isSmallScreen = window.innerWidth < 1000;
    },
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.updateScreenSize);
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
.video {
  width: 100%;
  height: auto;
  pointer-events: none;
  border-radius: 6px;
}
</style>
