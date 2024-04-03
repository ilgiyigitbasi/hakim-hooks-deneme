<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else class="home-wrapper">
    <h1 class="h1">Reports</h1>

    <div class="white-24px-div list-div">
      <div class="align-right-div">
        <ButtonComponent
          @click="togglePopup"
          :text="'Filters'"
          :width="'100px'"
          :height="'45px'"
        />
      </div>

      <div class="list-title-div">
        <div v-for="(title, index) in titles" :key="index">
          <p class="list-title explanation-text">{{ title }}</p>
        </div>
      </div>

      <div class="list-div" v-for="(listDataItem, index) in items" :key="index">
        <div class="line"></div>
        <DashboardListItem :listData="listDataItem" />
      </div>

      <Filter
        class="filter"
        :showPopup="showPopup"
        @closePopup="togglePopup"
        @filterApplied="handleFilterApplied"
      />
      <div class="align-center-div">
        <div class="pagination-div">
          <button
            class="pagination-button"
            @click="prevPage"
            :disabled="currentPage === 1"
          >
            Prev
          </button>

          <span class="other-button" v-if="currentPage > 1">
            <p @click="goToPage(currentPage - 1)">
              {{ currentPage - 1 }}
            </p>
          </span>
          <span class="current-button">{{ currentPage }}</span>
          <span class="other-button" v-if="currentPage < totalPages">
            <p @click="goToPage(currentPage + 1)">
              {{ currentPage + 1 }}
            </p>
          </span>
          <button
            class="pagination-button"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonComponent from "@/components/ButtonComponent.vue";
import DashboardListItem from "@/components/dashboard/DashboardListItem.vue";
import Filter from "@/components/dashboard/Filter.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters } from "vuex";

export default {
  name: "Reports",
  components: {
    ButtonComponent,
    DashboardListItem,
    Loader,
    Filter,
  },

  data() {
    return {
      showPopup: false,
      todos: [],
      titles: ["Request ID", "License Plate", "Date", "Detail"],
      items: [],
      currentPage: 1,
      totalPages: 0,
      isLoading: false,
      start_date: localStorage.getItem("startDate") || null,
      end_date: localStorage.getItem("endDate") || null,
      license_plate: null,
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods: {
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
    async getMain(page) {
      if (this.start_date && this.end_date && this.license_plate) {
        this.getTripsFiltered(page);
      } else if (this.start_date && this.end_date) {
        this.getTripsFilteredDate(page);
      } else {
        this.getTrips(page);
      }
    },
    async getTripsFiltered(page) {
      this.isLoading = true;
      try {
        const url =
          "http://104.197.168.64:8080/api/trips?page=" +
          page +
          "&start_date=" +
          this.start_date +
          " 00:00" +
          "&end_date=" +
          this.end_date +
          " 23:59" +
          "&license_plate=" +
          this.license_plate;
        console.log("Request URL:", url); // URL'yi konsola yazdır

        const response = await axios.get(url, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Access-Token": this.getToken,
          },
        });

        console.log("response data", response.data);
        this.items = response.data.items;
        this.totalPages = response.data.pages;
        this.$emit("trips-success", true);
        this.isLoading = false;
        localStorage.setItem("error", false);
      } catch (error) {
        console.error("Error fetching trips:", error.response.status);
        this.errorMessage = "Error fetching trips. Please try again.";
        this.$emit("trips-success", false);
        this.isLoading = false;
        localStorage.setItem("error", true);
      }
    },

    async getTripsFilteredDate(page) {
      this.isLoading = true;
      try {
        const url =
          "http://104.197.168.64:8080/api/trips?page=" +
          page +
          "&start_date=" +
          this.start_date +
          " 00:00" +
          "&end_date=" +
          this.end_date +
          " 23:59";
        console.log("Request URL:", url); // URL'yi konsola yazdır

        const response = await axios.get(url, {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Access-Token": this.getToken,
          },
        });

        console.log("response data", response.data);
        this.items = response.data.items;
        this.totalPages = response.data.pages;
        this.$emit("trips-success", true);
        this.isLoading = false;
        localStorage.setItem("error", false);
      } catch (error) {
        console.error("Error fetching trips:", error.response.status);
        this.errorMessage = "Error fetching trips. Please try again.";
        this.$emit("trips-success", false);
        this.isLoading = false;
        localStorage.setItem("error", true);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getMain(this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getMain(this.currentPage);
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.getMain(this.currentPage);
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    handleFilterApplied(data) {
      const { startDate, endDate, licensePlate } = data;

      this.start_date = startDate;
      this.end_date = endDate;
      this.license_plate = licensePlate;
      console.log("Dashboard'da alınan Start Date:", this.start_date);
      console.log("Dashboard'da alınan End Date:", this.end_date);
      console.log("Dashboard'dan alınan License Plate:", licensePlate);
      this.getMain(this.currentPage);
    },
  },
  mounted() {
    this.getTrips(this.currentPage);
  },
};
</script>
<style scoped>
@import "../assets/css/styles.css";
.list-div {
  position: relative;
}
</style>
