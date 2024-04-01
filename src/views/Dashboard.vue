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

      <DashboardList :listData="items" />
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/dashboard/DashboardList.vue";
import { mapGetters } from "vuex";
import axios from "axios";
const isaacvideo = require("@/assets/video/isaacvideo.mp4");
const mobilvideo = require("@/assets/video/mobil.mp4");
export default {
  components: {
    DashboardList,
  },

  data() {
    return {
      isSmallScreen: window.innerWidth < 1000,
      items: null,
    };
  },

  computed: {
    ...mapGetters(["getToken"]),
    videoSource() {
      return this.isSmallScreen ? mobilvideo : isaacvideo;
    },
  },

  mounted() {
    this.$refs.videoPlayer.play();
    window.addEventListener("resize", this.updateScreenSize);
    this.getTrips();
  },

  methods: {
    restartVideo() {
      this.$refs.videoPlayer.currentTime = 0;
    },
    updateScreenSize() {
      this.isSmallScreen = window.innerWidth < 1000;
    },
    async getTrips() {
      try {
        const response = await axios.get(
          " http://104.197.168.64:8080/api/trips",

          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );

        console.log("response data" + response.data);
        this.items = response.data.items;
        this.$store.dispatch("setTripsSuccess", true);

        localStorage.setItem("tripsRequestSuccess", true);
      } catch (error) {
        console.error("Login failed:", error.response.status);
        this.errorMessage = "Login failed. Please try again.";
        this.$store.dispatch("setTripsSuccess", false);

        localStorage.setItem("tripsRequestSuccess", false);
      }
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
