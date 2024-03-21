<template>
  <div class="dashboard-wrapper">
    <h1 class="h1">Dashboard</h1>
    <div class="column-gap-32px-div">
      <video
        class="video"
        ref="videoPlayer"
        src="../assets/video/isaacvideo.mp4"
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

export default {
  components: {
    DashboardList,
  },
  mounted() {
    // Otomatik olarak videoyu başlat
    this.$refs.videoPlayer.play();
  },
  methods: {
    restartVideo() {
      // Video tamamlandığında başa dön ve oynat
      this.$refs.videoPlayer.currentTime = 0;
      this.$refs.videoPlayer.play();
    },
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
