<template>
  <div class="home-wrapper">
    <h1 class="h1">Reports</h1>

    <div class="white-24px-div list-div">
      <div class="row-gap-16px-div">
        <SearchComponent />
        <ButtonComponent :text="'Filters'" :width="'100px'" :height="'45px'" />
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchComponent from "@/components/SearchComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import DashboardListItem from "@/components/dashboard/DashboardListItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "Reports",
  components: {
    SearchComponent,
    ButtonComponent,
    DashboardListItem,
  },

  data() {
    return {
      todos: [],
      titles: ["Request ID", "License Plate", "Date", "Detail"],
      items: [],
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods: {
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
  mounted() {
    this.getTrips();
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
