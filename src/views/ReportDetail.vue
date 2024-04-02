<template>
  <div class="home-wrapper">
    <div class="column-gap-32px-div">
      <div class="row-gap-space-between">
        <h1 class="h1">Report Detail</h1>

        <router-link to="/vehicleHistory" class="see-vehicle-button">
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
          :time="time"
          :requestId="requestId"
          :uploadedImages="uploadedImages"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import Images from "@/components/reportDetail/Images.vue";
import Details from "@/components/reportDetail/details/Details.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    ButtonComponent,
    Images,
    Details,
  },
  data() {
    return {
      imageData: null,
      licensePlate: "",
      date: "",
      time: "",
      requestId: "",
      uploadedImages: "",
    };
  },
  methods: {
    async getReportDetail() {
      try {
        const response = await axios.get(
          "http://104.197.168.64:8080/api/trips/" + this.requestId,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );
        console.log("response data" + response.data);
        this.licensePlate = response.data.license;
        this.date = response.data.date;
        this.time = response.data.date;
        this.requestId = response.data.id;
        this.uploadedImages = response.data.image_count;
        if (response.data.images) {
          this.imageData = response.data.images;
          console.log("image datas:", this.imageData);
        } else {
          console.log("No images data received from the server.");
        }
        console.log("image datas:" + this.imageData);
      } catch (error) {
        if (error.response && error.response.status) {
          console.error("Login failed:", error.response.status);
        } else {
          console.error("An error occurred:", error.message);
        }
        this.errorMessage = "An error occurred. Please try again.";
      }
    },
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  mounted() {
    this.getReportDetail();
  },
  created() {
    console.log("Received ID:", this.$route.query.id);
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
</style>
