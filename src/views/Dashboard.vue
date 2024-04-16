<template>
  <div class="dashboard-wrapper">
    <h1 class="h1">Dashboard</h1>
    <div class="column-gap-32px-div">
      <img class="video" :src="videoSource" alt="" />

      <DashboardList :listData="items" @filter-applied="handleFilterApplied" />
    </div>
  </div>
</template>

<script>
import DashboardList from "@/components/dashboard/DashboardList.vue";
import { mapGetters } from "vuex";
import axios from "axios";
const isaacvideo = require("@/assets/img/isaac-web.gif");
const mobilvideo = require("@/assets/img/isaac-mobil.gif");
export default {
  components: {
    DashboardList,
  },

  data() {
    return {
      isSmallScreen: window.innerWidth < 1000,
      items: null,
      isLoading: false,
      start_date: null,
      end_date: null,
      license_plate: null,
      currentPage: 1,
      token: localStorage.getItem("token") || null,
    };
  },

  computed: {
    videoSource() {
      return this.isSmallScreen ? mobilvideo : isaacvideo;
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateScreenSize);
    if (!this.getToken) {
      // Eğer token null ise
      this.$emit("trips-success", false);
    }
    this.getTrips(this.currentPage);
  },

  methods: {
    handleFilterApplied(data) {
      const { startDate, endDate, licensePlate } = data;

      this.start_date = startDate;
      this.end_date = endDate;
      this.license_plate = licensePlate;
      this.getTrips(this.currentPage);
    },

    updateScreenSize() {
      this.isSmallScreen = window.innerWidth < 1000;
    },
    async getTrips(page) {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `http://104.197.168.64:8080/api/trips?limit=10&page=${page}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.token,
            },
          }
        );

        this.items = response.data.items;
        this.totalPages = response.data.pages;
        this.isLoading = false;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else {
          console.error("Error fetching trips:", error);
          this.$router.push("/error");
        }
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
