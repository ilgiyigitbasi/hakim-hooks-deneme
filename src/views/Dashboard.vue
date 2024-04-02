<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else class="dashboard-wrapper">
    <h1 class="h1">Dashboard</h1>
    <div class="column-gap-32px-div">
      <img class="video" :src="videoSource" alt="" />

      <DashboardList :listData="items" @filter-applied="handleFilterApplied" />
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/dashboard/DashboardList.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters } from "vuex";
import axios from "axios";
const isaacvideo = require("@/assets/img/isaac-web.gif");
const mobilvideo = require("@/assets/img/isaac-mobil.gif");
export default {
  components: {
    DashboardList,
    Loader,
  },

  data() {
    return {
      isSmallScreen: window.innerWidth < 1000,
      items: null,
      isLoading: false,
      start_date: null,
      end_date: null,
    };
  },

  computed: {
    ...mapGetters(["getToken"]),
    videoSource() {
      return this.isSmallScreen ? mobilvideo : isaacvideo;
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateScreenSize);
    this.getTrips();
  },

  methods: {
    handleFilterApplied(data) {
      const { startDate, endDate } = data;

      this.start_date = startDate;
      this.end_date = endDate;
      console.log("Dashboard'da alınan Start Date:", this.start_date);
      console.log("Dashboard'da alınan End Date:", this.end_date);
      this.getMain();
    },

    updateScreenSize() {
      this.isSmallScreen = window.innerWidth < 1000;
    },
    async getMain() {
      if (this.start_date === null || this.end_date === null) {
        this.getTrips();
      } else {
        this.getTripsFiltered();
      }
    },
    async getTrips() {
      this.isLoading = true;
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

        this.$emit("trips-success", true);
        this.isLoading = false;
      } catch (error) {
        console.error("Login failed:", error.response.status);
        this.errorMessage = "Login failed. Please try again.";

        this.$emit("trips-success", false);
        this.isLoading = false;
      }
    },
    async getTripsFiltered() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          " http://104.197.168.64:8080/api/trips?start_date=" +
            this.start_date +
            " 00:00" +
            "&end_date=" +
            this.end_date +
            " 23:59",

          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );

        console.log("response data" + response.data);
        this.items = response.data.items;

        this.$emit("trips-success", true);
        this.isLoading = false;
      } catch (error) {
        console.error("Login failed:", error.response.status);
        this.errorMessage = "Login failed. Please try again.";

        this.$emit("trips-success", false);
        this.isLoading = false;
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
