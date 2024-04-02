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
        <Images :imageData="imageData" />
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
      imageData: [
        {
          src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
        },
        {
          src: "https://st.depositphotos.com/27201292/52202/i/450/depositphotos_522022318-stock-photo-vertical-shot-modern-red-cars.jpg",
        },
        {
          src: "https://st2.depositphotos.com/5899036/12206/i/450/depositphotos_122066108-stock-photo-alfa-romeo-4c-spider-on.jpg",
        },
        {
          src: "https://static.carfromjapan.com/car_bd6462a4-deb8-4aeb-bb8d-a53953ca97ba_640_0",
        },
      ],

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
          "http://104.197.168.64:8080/api/my-info/" + this.requestId,
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
        this.requestId = response.data.id;
        this.uploadedImages = response.data.image_count;
      } catch (error) {
        console.error("Login failed:", error.response.status);
        this.errorMessage = "Login failed. Please try again.";
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
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
.see-vehicle-button {
  text-decoration: none;
}
</style>
