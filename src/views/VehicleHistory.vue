<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else class="home-wrapper">
    <div class="column-gap-32px-div">
      <div class="row-gap-16px-div">
        <!-- <router-link to="/reportDetail">
          <img
            src="../assets/img/arrow-left.svg"
            style="height: 20px; margin-top: 8px"
          />
        </router-link>
-->

        <div class="row-gap-8px-div">
          <h1 class="h1 reports-text" @click="navigateToReports">Reports</h1>
          <h1 class="h1">- Vehicle History | {{ licensePlate }}</h1>
        </div>
      </div>

      <HorizontalExplanation
        :licensePlate="licensePlate"
        :total-trip="totalTrip"
      />
      <div class="white-24px-div list-div">
        <div class="list-title-div">
          <div v-for="(title, index) in titles" :key="index">
            <p class="list-title explanation-text">{{ title }}</p>
          </div>
        </div>

        <div
          class="list-div"
          v-for="(listDataItem, index) in listData"
          :key="index"
        >
          <div class="line"></div>
          <VehicleHistoryItem :listData="listDataItem" />
        </div>
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
  </div>
</template>

<script>
import HorizontalExplanation from "@/components/reportDetail/horizontalExplanation/HorizontalExplanation.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import VehicleHistoryItem from "@/components/VehicleHistoryItemm.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    HorizontalExplanation,
    ButtonComponent,
    SearchComponent,
    VehicleHistoryItem,
    Loader,
  },
  data() {
    return {
      titles: ["Request ID", "Uploaded Photo", "Date - Time", "Detail"],
      listData: [],
      licensePlate: "",
      totalTrip: "",
      isLoading: false,
      currentPage: 1,
      totalPages: 0,
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  mounted() {
    console.log("Page value on mount:", this.currentPage);
    this.getReportDetail(this.currentPage);
  },
  methods: {
    async getReportDetail(page) {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "http://104.197.168.64:8080/api/trips?limit=10&license_plate=" +
            this.licensePlate +
            "&page=" +
            page,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );
        console.log("response data" + response.data);
        this.listData = response.data.items;
        this.totalTrip = response.data.total;
        this.totalPages = response.data.pages;

        this.isLoading = false;
        localStorage.setItem("error", false);
      } catch (error) {
        if (error.response && error.response.status) {
          console.error("Login failed:", error.response.status);
        } else {
          console.error("An error occurred:", error.message);
        }
        this.errorMessage = "An error occurred. Please try again.";
        this.isLoading = false;
        localStorage.setItem("error", true);
      }
    },
    navigateToReports() {
      // Vue Router ile /reports yoluna yönlendirme yapın
      this.$router.push("/reports");
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getReportDetail(this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getReportDetail(this.currentPage);
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.getReportDetail(this.currentPage);
    },
  },
  created() {
    console.log("Page value on create:", this.currentPage);
    console.log("Received ID:", this.$route.query.id);
    this.licensePlate = this.$route.query.id;
    if (this.licensePlate) {
      this.getReportDetail();
    }
    console.log("Total Pages:", this.totalPages);
    console.log("License Plate:", this.licensePlate);
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
.icon {
  cursor: pointer;
}
.reports-text {
  cursor: pointer;
  transition: all 0.15s;
}
.reports-text:hover {
  color: #3382f8;
}
</style>
