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
    if (!this.getToken) {
      // Eğer token null ise
      this.$emit("trips-success", false);
    }
    this.getTrips(this.currentPage);
    console.log("Token:", this.getToken);
  },

  methods: {
    handleFilterApplied(data) {
      const { startDate, endDate, licensePlate } = data;

      this.start_date = startDate;
      this.end_date = endDate;
      this.license_plate = licensePlate;
      console.log("Dashboard'da alınan Start Date:", this.start_date);
      console.log("Dashboard'da alınan End Date:", this.end_date);
      console.log("Dashboard'dan alınan License Plate:", licensePlate);
      console.log(
        "License Plate değeri Reports.vue dosyasında:",
        this.license_plate
      ); // Bu satırı ekledim
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
              "X-Access-Token": this.getToken,
            },
          }
        );

        this.items = response.data.items;
        this.totalPages = response.data.pages;
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching trips:", error);
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
