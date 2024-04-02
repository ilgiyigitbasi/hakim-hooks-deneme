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

      <div class="align-center-div">
        <div class="pagination-div">
          <button @click="prevPage" :disabled="currentPage === 1">
            Previous
          </button>
          <span>{{ currentPage }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
          </button>
        </div>
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
      currentPage: 1,
      totalPages: 0,
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods: {
    async getTrips(page) {
      try {
        const response = await axios.get(
          `http://104.197.168.64:8080/api/trips?page=${page}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-Access-Token": this.getToken,
            },
          }
        );

        this.items = response.data.items;
        this.totalPages = response.data.pages;
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getTrips(this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getTrips(this.currentPage);
      }
    },
  },
  mounted() {
    this.getTrips(this.currentPage);
  },
};
</script>
<style scoped>
@import "../assets/css/styles.css";
.pagination-div {
  display: flex;
  flex-direction: row;
  column-gap: 24px;
}
.align-center-div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
</style>
