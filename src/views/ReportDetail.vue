<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else class="home-wrapper">
    <div class="column-gap-32px-div">
      <div class="row-gap-space-between">
        <div class="row-gap-8px-div">
          <h1 class="h1 reports-text" @click="navigateToReports">Reports</h1>
          <h1 class="h1">
            - Report Detail |
            <span class="nav-title-item">
              {{ licensePlate }} | {{ newFormattedDate }}</span
            >
          </h1>
        </div>

        <router-link
          :to="{ path: '/vehicleHistory', query: { id: licensePlate } }"
          class="see-vehicle-button"
        >
          <ButtonComponent
            :text="'See Vehicle History'"
            :width="'180px'"
            :height="'45px'"
            :background-color="'#3382F8'"
            :color="'#ffffff'"
          />
        </router-link>
      </div>
      <div class="grid-2-div" style="align-items: flex-start">
        <div v-if="imageData !== null">
          <Images :imageData="imageData" />
        </div>

        <Details
          :licensePlate="licensePlate"
          :date="date"
          :requestId="requestId"
          :uploadedImages="uploadedImages"
          :brand="brand"
          :model="model"
          :carType="carType"
          :color="color"
          :location="location"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import Images from "@/components/reportDetail/Images.vue";
import Details from "@/components/reportDetail/details/Details.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    ButtonComponent,
    Images,
    Details,
    Loader,
  },
  data() {
    return {
      isLoading: false,
      imageData: null,
      licensePlate: "",
      date: "",
      requestId: "",
      uploadedImages: "",
      newFormattedDate: "",
      brand: "",
      model: "",
      carType: "",
      color: "",
      location: "",
    };
  },
  methods: {
    async getReportDetail() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "http://104.197.168.64:8080/api/trips/" + this.requestId,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );

        this.licensePlate = response.data.license;
        this.date = response.data.date;
        this.requestId = response.data.id;
        this.uploadedImages = response.data.image_count;
        this.brand = response.data.brand;
        this.model = response.data.model;
        this.carType = response.data.car_type;
        this.color = response.data.color;
        this.location = response.data.location;
        if (response.data.images) {
          this.imageData = response.data.images;
        } else {
        }

        this.isLoading = false;
        localStorage.setItem("error", false);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else {
          console.error("Error fetching trips:", error);
          this.$router.push("/error");
        }
        this.isLoading = false;
        this.errorMessage = "An error occurred. Please try again.";
        this.isLoading = false;
        localStorage.setItem("error", true);
      }
    },
    navigateToReports() {
      // Vue Router ile /reports yoluna yönlendirme yapın
      this.$router.push("/reports");
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    },
  },
  computed: {
    ...mapGetters(["getToken"]),
    newFormattedDate() {
      return this.formatDate(this.date);
    },
  },
  mounted() {
    this.getReportDetail();
  },
  created() {
    this.requestId = this.$route.query.id;
    this.getReportDetail();
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
.see-vehicle-button {
  text-decoration: none;
}
.reports-text {
  cursor: pointer;
  transition: all 0.15s;
}
.reports-text:hover {
  color: #3382f8;
}
</style>
