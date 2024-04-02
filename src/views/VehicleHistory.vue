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
        <h1 class="h1">Vehicle History</h1>
      </div>

      <HorizontalExplanation
        :licensePlate="licensePlate"
        :total-trip="totalTrip"
      />
      <div class="white-24px-div list-div">
        <div class="row-gap-16px-div">
          <SearchComponent />
          <ButtonComponent
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

        <div
          class="list-div"
          v-for="(listDataItem, index) in listData"
          :key="index"
        >
          <div class="line"></div>
          <VehicleHistoryItem :listData="listDataItem" />
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
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  mounted() {
    this.getReportDetail();
  },
  methods: {
    async getReportDetail() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "http://104.197.168.64:8080/api/trips?limit=10&license_plate=" +
            this.licensePlate,
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
        this.isLoading = false;
      } catch (error) {
        if (error.response && error.response.status) {
          console.error("Login failed:", error.response.status);
        } else {
          console.error("An error occurred:", error.message);
        }
        this.errorMessage = "An error occurred. Please try again.";
        this.isLoading = false;
      }
    },
  },
  created() {
    console.log("Received ID:", this.$route.query.id);
    this.licensePlate = this.$route.query.id;
    this.getReportDetail();
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
